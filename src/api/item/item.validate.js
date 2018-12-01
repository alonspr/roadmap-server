import Joi from 'joi';
import { celebrate } from 'celebrate';

// Item reuseable schema props
const item = {
    name: Joi.string().min(3),
    phone: Joi.string().regex(/^[0-9\-\|+]{10,16}$/),
    city: Joi.string(),
    age: Joi.number(),
    brand: Joi.number(),
    price: Joi.number(),
    conversion: Joi.boolean(),
};

// Validates POST request
export const validateCreateItem = celebrate({
    body: Joi.object().keys({
        name: item.name.required(),
        phone: item.phone.required(),
        city: item.city,
        age: item.age.required(),
        brand: item.brand,
        price: item.price.required(),
        conversion: item.conversion,
    }),
});

// Validate PUT request
export const validateModifyItem = celebrate({
    body: item,
    params: {
        id: Joi.string().required(),
    },
});

// Validate DELETE request
export const validateDeleteItem = celebrate({
    params: {
        id: Joi.string().required(),
    },
});