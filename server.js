const express = require('express');
const sequelize = require('./config/connection');

const models = require('./Models/task');

const app = express();

const PORT = 3001;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('hello there!')
    });
});
