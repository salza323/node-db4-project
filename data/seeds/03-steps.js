exports.seed = function (knex, Promise) {
  return knex('steps').insert([
    {
      instruction: 'cook eggs to liking',
      recipe_id: 1,
      ingredient_id: 1,
      ingredient_qty: 2,
      sequence: 1,
    },
    {
      instruction: 'cook bacon to liking',
      recipe_id: 1,
      ingredient_id: 2,
      ingredient_qty: 25,
      sequence: 2,
    },
    {
      instruction: 'cook steak to liking',
      recipe_id: 2,
      ingredient_id: 3,
      ingredient_qty: 1,
      sequence: 1,
    },
    {
      instruction: 'mash taters & eat them',
      recipe_id: 2,
      ingredient_id: 4,
      ingredient_qty: 4,
      sequence: 2,
    },
    //   { instruction: "", recipe_id: 4, ingredient_id: , ingredient_qty: , sequence:  },
    //   { instruction: "", recipe_id: 5, ingredient_id: , ingredient_qty: , sequence:  },
    //   { instruction: "", recipe_id: 6, ingredient_id: , ingredient_qty: , sequence:  },
    //   { instruction: "", recipe_id: 1, ingredient_id: , ingredient_qty: , sequence:  },
    //   { instruction: "", recipe_id: 4, ingredient_id: , ingredient_qty: , sequence:  },
    //   { instruction: "", recipe_id: 7, ingredient_id: , ingredient_qty: , sequence:  },
    //   { instruction: "", recipe_id: 8, ingredient_id: , ingredient_qty: , sequence: },
  ]);
};
