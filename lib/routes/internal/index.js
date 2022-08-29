import { Router } from 'express';
import {
  byEmail,
  sample,
}                 from '../../modules/company/index.js';

const router = Router({ mergeParams: true });

router.get('/', async (req, res) => {
  res.json(await byEmail(req.query.email));
});

router.put('/sample', async (req, res) => {
  res.json(await sample());
});

export default router;
