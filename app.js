const express = require('express');

const multer = require('multer');

const upload = multer();

const { SignupNotificationController } = require('./controllers/SignupNotificationController');

const app = express();

app.use(express.json());

app.post('/api/send-email', upload.none(), SignupNotificationController);

module.exports = app;