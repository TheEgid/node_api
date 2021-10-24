import { Router } from 'express';

const routes = Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome!
 *     responses:
 *       200:
 *         description: OK
 */
routes.get('/', (req, res) => {
  res.json({ message: 'Ok' });
});

export default routes;
