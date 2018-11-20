import { Router } from 'express';
import { getItems, createItem, modifyItem, deleteItem } from '../controllers/item';

/**
 * API Route endpoint: http://localhost:5000/api/item/
 */

const router = Router();

// rest api endpoints
router.get('/', getItems);
router.post('/', createItem);
router.put('/:id', modifyItem);
router.delete('/:id', deleteItem);

export default router;
