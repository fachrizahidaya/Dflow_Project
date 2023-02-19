const db = require("../models");
const user = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../middleware/transporter");
const fs = require("fs");
const handlebars = require("handlebars");
const { Op } = require("sequelize");

module.exports = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, email, password, password_confirmation } =
        req.body;
      if (password !== password_confirmation) throw `Password not match`;
      if (password.length < 8) throw `Minimum password 8 characters`;
      const codeOtp = Math.floor(100000 + Math.random() * 900000).toString();
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(password, salt);
      const hashOtp = await bcrypt.hash(codeOtp, salt);

      const register = await user.create({
        firstName,
        lastName,
        email,
        password: hashPass,
        codeOtp: hashOtp,
      });
      const token = jwt.sign({ email: email }, "commerce", {
        expiresIn: "1h",
      });

      const tempEmail = fs.readFileSync("./template/codeotp.html", "utf-8");
      const tempCompile = handlebars.compile(tempEmail);
      const tempResult = tempCompile({
        email,
        codeOtp,
      });
      await transporter.sendMail({
        from: "E-commerce",
        to: email,
        subject: "Account Verification",
        html: tempResult,
      });
      res.status(200).send({
        message: "Verification code sent to your Email",
        register,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  verification: async (req, res) => {
    try {
      const { codeOtp } = req.body;

      const isAccountExist = await user.findOne({
        where: {
          email: req.user.email,
        },
        raw: true,
      });

      const isValid = await bcrypt.compare(codeOtp, isAccountExist.codeOtp);

      if (!isValid) throw `Incorrect OTP Code`;

      await user.update(
        {
          isVerified: true,
          isAdmin: false,
        },
        {
          where: {
            email: req.user.email,
          },
        }
      );
      res.status(200).send({
        message: "Verification success",
        data: isAccountExist,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  otp: async (req, res) => {
    try {
      const { email } = req.body;
      const codeOtp = Math.floor(100000 + Math.random() * 900000).toString();
      const salt = await bcrypt.genSalt(10);
      const hashOtp = await bcrypt.hash(codeOtp, salt);
      const verify = await user.update(
        {
          codeOtp: hashOtp,
        },
        {
          where: {
            email,
          },
        }
      );
      const isAccountExist = await user.findOne({
        where: {
          email,
        },
        raw: true,
      });
      const token = jwt.sign({ email }, "commerce", {
        expiresIn: "1h",
      });
      const tempEmail = fs.readFileSync("./template/codeotp.html", "utf-8");
      const tempCompile = handlebars.compile(tempEmail);
      const tempResult = tempCompile({
        email: isAccountExist.email,
        codeOtp,
      });
      await transporter.sendMail({
        from: "E-commerce",
        to: email,
        subject: "Account Verification",
        html: tempResult,
      });
      res.status(200).send({
        message: "Verification code sent to your Email",
        verify,
        token,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },

  createAdmin: async (req, res) => {
    try {
      const { firstName, lastName, email, password, password_confirmation } =
        req.body;
      if (password !== password_confirmation) throw `Password not match`;
      if (password.length < 8) throw `Minimum password 8 characters`;
      const codeOtp = Math.floor(100000 + Math.random() * 900000).toString();
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(password, salt);
      const hashOtp = await bcrypt.hash(codeOtp, salt);

      const register = await user.create({
        firstName,
        lastName,
        email,
        password: hashPass,
        codeOtp: hashOtp,
      });
      const token = jwt.sign({ email: email }, "commerce", {
        expiresIn: "1h",
      });

      const tempEmail = fs.readFileSync("./template/codeotp.html", "utf-8");
      const tempCompile = handlebars.compile(tempEmail);
      const tempResult = tempCompile({
        email,
        codeOtp,
      });
      await transporter.sendMail({
        from: "E-commerce",
        to: email,
        subject: "Account Verification",
        html: tempResult,
      });
      res.status(200).send({
        message: "Verification code sent to your Email",
        register,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  verificationAdmin: async (req, res) => {
    try {
      const { codeOtp } = req.body;

      const isAccountExist = await user.findOne({
        where: {
          email: req.user.email,
        },
        raw: true,
      });

      const isValid = await bcrypt.compare(codeOtp, isAccountExist.codeOtp);

      if (!isValid) throw `Incorrect OTP Code`;

      await user.update(
        {
          isVerified: false,
          isAdmin: true,
        },
        {
          where: {
            email: req.user.email,
          },
        }
      );
      res.status(200).send({
        message: "Verification success",
        data: isAccountExist,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email, password, id } = req.body;
      const isAccountExist = await user.findOne({
        where: {
          [Op.or]: {
            email: email ? email : "",
            id: id ? id : 0,
          },
        },
        raw: true,
      });

      if (isAccountExist === null) throw `Account not found`;
      const payload = {
        email: isAccountExist.email,
        id: isAccountExist.id,
        isVerified: isAccountExist.isVerified,
      };

      const token = jwt.sign(payload, "commerce");
      const isValid = await bcrypt.compare(password, isAccountExist.password);
      if (!isValid) throw `Password incorrect`;

      res.status(200).send({
        message: "Login success",
        isAccountExist,
        token,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },

  loginAdmin: async (req, res) => {
    try {
      const { email, password, id, isAdmin } = req.body;
      const isAccountExist = await user.findOne({
        where: {
          [Op.or]: {
            email: email ? email : "",
            id: id ? id : 0,
            isAdmin: isAdmin ? false : true,
          },
        },
        raw: true,
      });

      if (isAccountExist === null) throw `Account not found`;
      const payload = {
        email: isAccountExist.email,
        id: isAccountExist.id,
        isVerified: isAccountExist.isVerified,
        isAdmin: isAccountExist.isAdmin,
      };

      const token = jwt.sign(payload, "commerce");
      const isValid = await bcrypt.compare(password, isAccountExist.password);
      if (!isValid) throw `Password incorrect`;

      res.status(200).send({
        message: "Login success",
        isAccountExist,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  keepLogin: async (req, res) => {
    try {
      const verify = jwt.verify(req.token, "commerce");
      const result = await user.findOne({
        where: {
          email: verify.email,
          id: verify.id,
        },
        raw: true,
      });
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  keepLoginAdmin: async (req, res) => {
    try {
      const verify = jwt.verify(req.token, "commerce");
      const result = await user.findOne({
        where: {
          email: verify.email,
          id: verify.id,
        },
        raw: true,
      });
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
