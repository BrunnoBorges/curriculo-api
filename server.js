require('dotenv').config();
require('module-alias/register');
const boot = require('@service/boot')
const config = require('@config');
const mongoose = require('mongoose');


if(config.db.connectionString) {
    // console.log('xxxx')
    mongoose.connect(config.db.connectionString, boot);
} else {
    console.log('no connection string provide')
}

