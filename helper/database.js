const Sequelize=require('sequelize');
const sequelize=new Sequelize('booking-appointment','root','@Anusha468',{
    dialect:'mysql',
    host:'localhost'

});

module.exports=sequelize;
