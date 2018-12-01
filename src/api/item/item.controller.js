import Item from './items.model';

export async function getItems (req, res) {
    try {
        const items = await Item.find({});
        res.send({ items });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

export async function createItem (req, res) {
    try {
        const item = await Item.create(req.body);
        res.send({ item });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

export async function modifyItem (req, res) {
    try {
        const { id: _id } = req.params;
        const updated = await Item.findByIdAndUpdate(_id, req.body, {
            new: true, // returns the updated object after the request
            runValidators: true, // make sure to validate new object by the schema
        });
        res.send({ updated }); 
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

export async function deleteItem (req, res) {
    try {
        const { id: _id } = req.params;
        const deleted = await Item.findByIdAndRemove({ _id });

        if (deleted === null) {
            throw new Error('The selected item does not exists');
        }
        res.send({ _id });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}
