const router = require('express').Router();

router.get('/', (req, res) =>
  res.status(200).json({ message: 'ah ah ah ah staying alive' })
);

module.exports = router;
