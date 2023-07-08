const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

const adminRoutes = require('./routes/admin');

app.use(adminRoutes);

sequelize
    .sync()
    //.sync({force:true})
    .then(result => {
        app.listen(3333);
    })
    .catch(err => console.log(err))
