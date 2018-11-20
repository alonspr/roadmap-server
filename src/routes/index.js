import { Router } from 'express';
import item from './item';

const router = Router();

router.use('/item', item);

export default router;
