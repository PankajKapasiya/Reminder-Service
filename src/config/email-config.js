
const nodemailer = require('nodemailer');
const { Email_id, Email_pass } = require('./server-config');

const sender = nodemailer.createTransport({
    service :'Gmail',
    auth: {
        user : Email_id,
        pass : Email_pass
    }
});
module.exports = sender;