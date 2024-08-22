const express = require('express');
const helmet = require('helmet');

import userRoutes from './user.routes';
import mainRoutes from './main.routes';

const app = express();
const port = 8080;

app.use(express.json()); 
app.use(helmet());

app.use('v1/ping', mainRoutes);
app.use('/v1/user', userRoutes);


app.listen(port, () => {
    console.log(`Hey, go to http://localhost:${port}`)
});