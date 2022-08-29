import { Router }  from 'express';
import { byEmail } from '../../modules/company/index.js';

const router = Router({ mergeParams: true });

router.get('/', async (req, res) => {
  res.json(await byEmail(req.query.email));
});

export default router;
