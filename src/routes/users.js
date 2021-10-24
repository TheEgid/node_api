import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ message: 'Ok' });
});

export default router;
