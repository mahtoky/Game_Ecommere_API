const express = require('express');
const user_routes = require('./routes/user_routes');
const app = express();

app.use(express.json());
// app.use(express.urlencoded(true));

app.use('/api/users', user_routes);

app.listen(3000, () => {
    console.log('Server is opening in port 3000');
})