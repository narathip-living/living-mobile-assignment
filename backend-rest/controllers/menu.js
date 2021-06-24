const menu = require("../models/menu");

/**
 * CRUD CONTROLLERS
 */

//CREATE-ONE
exports.createOne = async (req, res, next) => {
  console.log("createOne: [POST] /categories/");
  try {
    const menu_model = {
      category_id: req.body.category_id,
      name: req.body.name,
      price: req.body.price,
    };

    try {
      const create = await menu.create(menu_model);
      console.log("OK createOne Menu: ", create);
      return res.status(201).json(create);
    } catch (error) {
      console.log("ERROR in createOne " + "Menu:", error);
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
    const all = await menu.findAll();
    console.log(
      "OK getAll Menu: ",
      all.map((el) => el.dataValues)
    );
    return res.status(200).json(all);
  } catch (error) {
    console.log("ERROR in getAll " + "Menu:", error);
    return res.status(500).json(error);
  }
};

//GET-ONE
exports.getOne = async (req, res, next) => {
  console.log("getOne: [GET] /categories/:id");
  try {
    const get = await menu.findByPk(req.params.id);
    console.log("OK getOne Menu: ", get.dataValues);
    return res.status(200).json(get);
  } catch (error) {
    console.log("ERROR in getOne " + "Menu:", error);
    return res.status(500).json(error);
  }
};

//UPDATE-ONE.
exports.updateOne = async (req, res, next) => {
  console.log("updateOne: [PUT] /categories/:id");
  try {
    const menu_model = {
      category_id: req.body.category_id,
      name: req.body.name,
      price: req.body.price,
    };

    try {
      const update = await menu.update(menu_model, {
        where: { id: req.params.id },
      });
      console.log("OK updateOne Menu: ", update);
      return res.status(200).json(update);
    } catch (error) {
      console.log("ERROR in updateOne " + "Menu:", error);
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
    const del = await menu.destroy({ where: { id: req.params.id } });
    console.log("OK deleteOne Menu: ");
    return res.status(200).json(del);
  } catch (error) {
    console.log("ERROR in deleteOne " + "Menu:", error);
    return res.status(500).json(error);
  }
};
