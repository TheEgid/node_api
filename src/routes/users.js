import { Router } from 'express';

const routes = Router();

routes.get('/users', (req, res) => {
  res.json({ message: 'Ok' });
});

export default routes;
