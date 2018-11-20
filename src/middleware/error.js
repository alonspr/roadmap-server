// the specific route was not found
export function notFound (req, res, next) {
    const err = new Error(`Not Found: ${req.path}`);
    err.status = 404;
    next(err);
}
 
// error response
export function serverError (err, req, res) {
    console.log('error', err.message);
    res.status(err.status);
    res.json({ error: err.message });
}
