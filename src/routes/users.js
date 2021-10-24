import { Router } from 'express';

const routes = Router();

// '/users'
routes.get('/', async (req, res) => {
  res.json({ message: 'Ok' });
});

export default routes;
