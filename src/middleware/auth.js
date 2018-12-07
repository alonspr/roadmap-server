// auth jwt middleware
export function auth (req, res, next) {
    // TODO: check user auth (auto0)
    // if (!user) {
    //     return res.status(401).send({ error: 'Access Denied' });
    // }
    next();
}
