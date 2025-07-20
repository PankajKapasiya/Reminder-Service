const dotenv = require('dotenv');
dotenv.config();

module.exports ={
    PORT : process.env.PORT,
    Email_id : process.env.EMAIL_id,
    Email_pass : process.env.Email_Pass
}