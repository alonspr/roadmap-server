import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import { auth } from './middleware/auth';
import { validationError, notFound, serverError } from './middleware/error';

const app = express();
const port = process.env.PORT || 5000;

// connect to mongodb
mongoose.connect('mongodb://localhost/clients', {
    /* remove deprecation warning */
    useNewUrlParser: true,
    useCreateIndex: true,
});
mongoose.Promise = global.Promise;

// using api logger
app.use(morgan('tiny'));

// using core middlewares
app.use(bodyParser.json());
app.use(cors());

// using the api routes
app.use('/api', auth, routes);

// not found error middlewares
app.use(validationError);
app.use(notFound);
app.use(serverError);

// listening to our server
app.listen(port, () => console.log(`Listening on port ${port}`));