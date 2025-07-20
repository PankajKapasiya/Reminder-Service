const sender = require('../config/email-config');

const sendbasicmail = (from, to, subject, body)=>{
    sender.sendMail({
        from :from,
        to :to,
        subject : subject,
        text : body
    })
}


module.exports={
    sendbasicmail
}