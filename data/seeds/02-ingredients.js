exports.seed = function (knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'Eggs' },
    { ingredient_name: 'Bacon' },
    { ingredient_name: 'Steak' },
    { ingredient_name: 'Potatatoes' },
  ]);
};
