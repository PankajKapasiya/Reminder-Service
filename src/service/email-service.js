const sender = require('../config/email-config');

const TicketRepository = require('../repository/ticket-repository');
const sendbasicmail = async (from, to, subject, body)=>{
    try{
        //console.log(from, to, subject, body);
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

const fetchPendingEmail = async (timestamp)=>{
    try{
        const repo = new TicketRepository();
        const response = await repo.get({status : "PENDING"});
        return response;
    }
    catch(error){
        console.log("something went wrong service");
        throw error;
    }
}

const createNotification = async(data) =>{
    try{

        const repo = new TicketRepository();
        const response = await repo.create(data);
        return response;
    }
    catch(error){
        console.log("something went wrong service");
        throw error;
    }
}

module.exports={
    sendbasicmail,
    fetchPendingEmail,
    createNotification
}