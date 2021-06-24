const Sequelize = require("sequelize");
const db = require("../util/database");

const store = db.define("store", {
  store_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.FLOAT,
  },
});

store.associate = (models) => {
  Store.hasMany(models.Catagory, {
    foreignKey: {
      name: "store_id",
    },
    OnUpdate: "RESTRICT",
    onDelete: "CASCADE",
  });
};

module.exports = store;
