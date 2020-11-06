exports.seed = function (knex, Promise) {
  return knex('Recipes').insert([
    { recipe_name: 'eggs & bacon' },
    { recipe_name: 'steak & potatoes' },
  ]);
};
