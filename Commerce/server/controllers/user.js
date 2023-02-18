const db = require("../models");
const user = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../middleware/transporter");
const fs = require("fs");
const handlebars = require("handlebars");

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
        },
        {
          where: {
            email: req.user.email,
          },
        }
      );
      res.status(200).send({
        message: "Verification success",
        isAccountExist,
      });
    } catch (err) {
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

};
