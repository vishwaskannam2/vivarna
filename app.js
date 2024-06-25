const express = require('express');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const workerLogin = require('./routes/workerLogin');
const workerRegister = require('./routes/workerRegister');
const workersRoute = require('./routes/workers'); 


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/worker-login', workerLogin);
app.use('/worker-register', workerRegister); 
app.use('/api/workers', workersRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('http://localhost:3000/main.html')
});