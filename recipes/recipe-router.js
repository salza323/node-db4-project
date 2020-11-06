const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
});

router.get('/:id/shoppinglist', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then((item) => {
      if (item.length) {
        res.json(item);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find items for given recipe' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get items' });
    });
});

module.exports = router;
