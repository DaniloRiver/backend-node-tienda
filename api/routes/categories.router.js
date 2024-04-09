const express = require('express');
const { faker } = require("@faker-js/faker");
const router = express.Router();

router.get('/:categoryId/:productId', (req, res)=>{

  const { categoryId, productId } = req.params;
  res.json(
    {
      productId,
      categoryId,
    }
  );
})

module.exports = router;
