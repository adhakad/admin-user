const mongoose = require('mongoose');
 mongoose.connect('mongodb+srv://adminUser:7pH4LDTnmlLMsCSA@cluster0.ngu0t.mongodb.net/admin-user?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology:true,});
 var conn =mongoose.Collection;
 var userSchema =new mongoose.Schema({
      
    name: { type:String},
    email: { type:String},
    password: { type:String},
    status:{type:Number},
    isTermsConditionAccepted:{type:Number},
    //timestamps:true,
 });
 
 var adminUserModel = mongoose.model('Users',userSchema);
 module.exports=adminUserModel;