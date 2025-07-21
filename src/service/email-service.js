const sender = require('../config/email-config');

const sendbasicmail = async (from, to, subject, body)=>{
    try{
        console.log(from, to, subject, body);
        const response = await sender.sendMail({
            from :from,
            to :to,
            subject : subject,
            text : body
        })
    }
    catch(error){
        console.log("something went wring in email service");
        throw error;
    }
}


module.exports={
    sendbasicmail
}