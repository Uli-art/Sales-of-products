const Sequelize = require("sequelize");
const sequelize = new Sequelize("server_shop", "root", "NothingElseMatters2023@", {
  dialect: "mysql",
  host: "localhost",
  port: "3306",
  define: {
    timestamps: false
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./user')(sequelize, Sequelize);
db.categories = require('./categories')(sequelize, Sequelize)
db.statusesofproduct = require('./statusesofproduct')(sequelize, Sequelize);
db.product = require('./products')(sequelize, Sequelize);
db.statusesoforder = require('./statusesoforder')(sequelize, Sequelize);
db.order = require('./orders')(sequelize, Sequelize);
db.cards = require('./cards')(sequelize, Sequelize);
db.comments = require('./comments')(sequelize, Sequelize);
db.favorites = require('./favorites')(sequelize, Sequelize);
db.rating = require('./ratings')(sequelize, Sequelize);
db.sellers = require('./sellers')(sequelize, Sequelize);

module.exports = db;

db.users.hasMany(db.rating);
db.rating.belongsTo(db.users);

db.product.hasMany(db.rating);
db.rating.belongsTo(db.product);

db.sellers.hasMany(db.product);
db.product.belongsTo(db.sellers);

db.statusesofproduct.hasMany(db.product);
db.product.belongsTo(db.statusesofproduct);

db.categories.hasMany(db.product);
db.product.belongsTo(db.categories);

db.users.hasMany(db.order);
db.order.belongsTo(db.users);

db.statusesoforder.hasMany(db.order);
db.order.belongsTo(db.statusesoforder);

db.product.hasMany(db.favorites);
db.favorites.belongsTo(db.product);

db.users.hasMany(db.favorites);
db.favorites.belongsTo(db.users);

db.statusesoforder.hasMany(db.order);
db.order.belongsTo(db.statusesoforder);

db.users.hasMany(db.comments);
db.comments.belongsTo(db.users);

db.product.hasMany(db.comments);
db.comments.belongsTo(db.product);

db.users.hasMany(db.cards);
db.cards.belongsTo(db.users);

db.product.hasMany(db.cards);
db.cards.belongsTo(db.product);
