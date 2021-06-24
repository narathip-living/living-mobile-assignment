const Sequelize = require("sequelize");
const db = require("../util/database");

const category = db.define("category", {
  category_id: {
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
  },
  store_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
});

category.associate = (models) => {
  category.hasMany(models.Menu, {
    foreignKey: {
      name: "category_id",
    },
    OnUpdate: "RESTRICT",
    onDelete: "CASCADE",
  });

  category.belongsTo(models.Store, {
    foreignKey: {
      name: "store_id",
      allowNull: false,
    },
    OnUpdate: "RESTRICT",
    onDelete: "CASCADE",
  });
};

module.exports = category;
