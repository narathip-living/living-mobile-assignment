const store = require("../models/store");

/**
 * CRUD CONTROLLERS
 */

//CREATE-ONE
exports.createOne = async (req, res, next) => {
  console.log("createOne: [POST] /stores/");
  try {
    const store_model = {
      name: req.body.name,
      description: req.body.description,
      rating: req.body.rating,
    };

    try {
      const create = await store.create(store_model);
      console.log("OK createOne Store: ", create);
      return res.status(201).json(create);
    } catch (error) {
      console.log("ERROR in createOne " + "Store:", error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json("Bad Request");
  }
};

//GET-ALL
exports.getAll = async (req, res, next) => {
  console.log("getAll: [GET] /stores/");
  try {
    const all = await store.findAll();
    console.log(
      "OK getAll Store: ",
      all.map((el) => el.dataValues)
    );
    return res.status(200).json(all);
  } catch (error) {
    console.log("ERROR in getAll " + "Store:", error);
    return res.status(500).json(error);
  }
};

//GET-ONE
exports.getOne = async (req, res, next) => {
  console.log("getOne: [GET] /stores/:id");
  try {
    const get = await store.findByPk(req.params.id);
    console.log("OK getOne Store: ", get.dataValues);
    return res.status(200).json(get);
  } catch (error) {
    console.log("ERROR in getOne " + "Store:", error);
    return res.status(500).json(error);
  }
};

//UPDATE-ONE.
exports.updateOne = async (req, res, next) => {
  console.log("updateOne: [PUT] /stores/:id");
  try {
    const store_model = {
      name: req.body.name,
      description: req.body.description,
      rating: req.body.rating,
    };

    try {
      const update = await store.update(store_model, {
        where: { id: req.params.id },
      });
      console.log("OK updateOne Store: ", update);
      return res.status(200).json(update);
    } catch (error) {
      console.log("ERROR in updateOne " + "Store:", error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json("Bad Request");
  }
};

//DELETE-ONE
exports.deleteOne = async (req, res, next) => {
  console.log("[DELETE] /stores/:id");
  try {
    const del = await store.destroy({ where: { id: req.params.id } });
    console.log("OK deleteOne Store: ");
    return res.status(200).json(del);
  } catch (error) {
    console.log("ERROR in deleteOne " + "Store:", error);
    return res.status(500).json(error);
  }
};
