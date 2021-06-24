const Sequelize = require("sequelize");
const db = require("../util/database");

const menu = db.define("category", {
  menu_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  category_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
  },
});

menu.associate = (models) => {
  menu.belongsTo(models.category, {
    foreignKey: {
      name: "category_id",
      allowNull: false,
    },
    OnUpdate: "RESTRICT",
    onDelete: "CASCADE",
  });
};

module.exports = menu;
