import Joi from 'joi';
import { celebrate } from 'celebrate';

export const validateCreateItems = celebrate({
    body: Joi.object().keys({
        name: Joi.string().min(2).required(),
        phone: Joi.string().regex(/^[0-9\-\|+]{10,16}$/).required(),
        city: Joi.string(),
        age: Joi.number().required(),
        brand: Joi.boolean(),
        price: Joi.number().required(),
        conversion: Joi.boolean(),
    }),
});

export const validateDeleteItem = celebrate({
    params: {
        id: Joi.string().required(),
    },
});