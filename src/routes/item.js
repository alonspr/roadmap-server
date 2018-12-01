import { Router } from 'express';
import { getItems, createItem, modifyItem, deleteItem } from '../api/item/item.controller';
import { validateCreateItems, validateModifyItem, validateDeleteItem } from '../api/item/item.validate';

/**
 * API Route endpoint: http://localhost:5000/api/item/
 */

const router = Router();

// rest api endpoints
router.get('/', getItems);
router.post('/', validateCreateItems, createItem);
router.put('/:id', validateModifyItem, modifyItem);
router.delete('/:id', validateDeleteItem, deleteItem);

export default router;
