const { Op } = require("sequelize");
const db = require("../models");
const product = db.Product;

module.exports = {
  create: async (req, res) => {
    try {
      const { productName, description, price, weight } = req.body;
      if (!productName && !description && !price && !weight)
        throw `Required field`;
      const register = await product.create({
        productName,
        price,
        weight,
        description,
      });
      res.status(200).send("Product created");
    } catch (err) {
      res.status(400).send(err);
    }
  },

  picture: async (req, res) => {
    try {
      let fileUploaded = req.file;

      await product.update(
        {
          picture: `Public/${fileUploaded.filename}`,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      const getPicture = await product.findOne({
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.status(200).send({
        id: getPicture.id,
        picture: getPicture.picture,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  findAll: async (req, res) => {
    try {
      const products = await product.findAll({});
      res.status(200).send(products);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
