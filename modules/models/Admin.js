const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminUser:7pH4LDTnmlLMsCSA@cluster0.ngu0t.mongodb.net/admin-user?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true,});
var conn =mongoose.Collection;
var adminSchema =new mongoose.Schema({
     
        email: { type:String},
        password: { type:String},
        status : {type:Number},
        //timestamps:true,
    });

 var adminModel = mongoose.model('Admin',adminSchema);
 module.exports=adminModel;