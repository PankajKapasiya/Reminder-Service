const {NotificationTicket} = require('../models/index');
const {Op} = require('sequelize');
class TicketRepository{
    constructor(){
    }

    async getall(){
        try{
            const tickets = await NotificationTicket.findAll();
            return tickets;
        }
        catch(error){
            console.log("something went wrong repo");
            throw error;
        }
    }

    async create(data){
        try{
            // console.log(data);
            const response = await NotificationTicket.create(data);
            return response;
        }
        catch(error){
            console.log(error);
            console.log("something went wrong repo");
            throw error;
        }
    }

    async get(filter){
        try{
            const tickets = await NotificationTicket.findAll({
                where : {
                    status : filter.status,
                    notificationtime :{
                        [Op.lte] : "2025-07-21T17:00:00Z"
                    }
                }
            });
            return tickets;
        }
        catch(error){
            console.log("something went wrong repo");
            throw error;
        }
    }

    async update(ticketId, data){
        try{

        }
        catch(error){
            console.log("something went wrong repo");
            throw error;
        }
    }
}

module.exports = TicketRepository;