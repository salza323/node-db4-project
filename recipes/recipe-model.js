const db = require('../data/db-config');

module.exports = {
  getRecipes() {
    return db('recipes');
  },
  getShoppingList(id) {
    return db('recipes as r')
      .join('steps as s', 'r.id', 's.ingredient_id')
      .select('r.recipe_name', 's.ingredient_id')
      .where({ 'r.id': id });
  },
};
