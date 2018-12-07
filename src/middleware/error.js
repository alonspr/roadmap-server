// validation error for joi
export function validationError(err, req, res, next) {
    if (err) {
        // sending custom response for validation
        // instead of the default errors middleware
        console.log('error 400:', err.message);
        return res.status(400).json({ error: err.message });
    }
    return next(err);
}

// endpoint was not found
export function notFound(req, res, next) {
    const err = new Error(`Not Found: ${req.path}`);
    err.status = 404;
    next(err);
}

// error response
export function serverError(err, req, res) {
    console.log('error 404:', err.message);
    res.status(err.status).json({ error: err.message });
}
