const cron = require('node-cron');

const emailservice= require('../service/email-service');

const setupjob = ()=>{
    cron.schedule("*/2 * * * *", async()=>{
        console.log("all pending mail");
        const response = await emailservice.fetchPendingEmail();

        response.forEach((email) => {
            emailservice.sendbasicmail(
                "pankajkapasiya@gmail.com",
                email.recepientEmail,
                email.subject,
                email.content
            )
        });
        console.log(response);
    })
}

module.exports = setupjob;