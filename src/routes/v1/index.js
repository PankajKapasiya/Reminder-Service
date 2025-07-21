const express = require('express');

const router = express.Router();

const {Emailcontrollers} = require('../../controlllers/index');

const emailcontrollers = new Emailcontrollers();
router.post('/sendmail', emailcontrollers.send);

module.exports= router;

