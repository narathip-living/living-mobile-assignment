const category = require("../models/category");

/**
 * CRUD CONTROLLERS
 */

//CREATE-ONE
exports.createOne = async (req, res, next) => {
  console.log("createOne: [POST] /categories/");
  try {
    const category_model = {
      name: req.body.name,
      store_id: req.body.store_id,
    };

    try {
      const create = await category.create(category_model);
      console.log("OK createOne Category: ", create);
      return res.status(201).json(create);
    } catch (error) {
      console.log("ERROR in createOne " + "Category:", error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json("Bad Request");
  }
};

//GET-ALL
exports.getAll = async (req, res, next) => {
  console.log("getAll: [GET] /categories/");
  try {
    const all = await category.findAll();
    console.log(
      "OK getAll Category: ",
      all.map((el) => el.dataValues)
    );
    return res.status(200).json(all);
  } catch (error) {
    console.log("ERROR in getAll " + "Category:", error);
    return res.status(500).json(error);
  }
};

//GET-ONE
exports.getOne = async (req, res, next) => {
  console.log("getOne: [GET] /categories/:id");
  try {
    const get = await category.findByPk(req.params.id);
    console.log("OK getOne Category: ", get.dataValues);
    return res.status(200).json(get);
  } catch (error) {
    console.log("ERROR in getOne " + "Category:", error);
    return res.status(500).json(error);
  }
};

//UPDATE-ONE.
exports.updateOne = async (req, res, next) => {
  console.log("updateOne: [PUT] /categories/:id");
  try {
    const category_model = {
      name: req.body.name,
      store_id: req.body.store_id,
    };

    try {
      const update = await category.update(category_model, {
        where: { id: req.params.id },
      });
      console.log("OK updateOne Category: ", update);
      return res.status(200).json(update);
    } catch (error) {
      console.log("ERROR in updateOne " + "Category:", error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json("Bad Request");
  }
};

//DELETE-ONE
exports.deleteOne = async (req, res, next) => {
  console.log("[DELETE] /categories/:id");
  try {
    const del = await category.destroy({ where: { id: req.params.id } });
    console.log("OK deleteOne Category: ");
    return res.status(200).json(del);
  } catch (error) {
    console.log("ERROR in deleteOne " + "Category:", error);
    return res.status(500).json(error);
  }
};
