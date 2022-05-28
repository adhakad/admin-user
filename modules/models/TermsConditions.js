const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminUser:7pH4LDTnmlLMsCSA@cluster0.ngu0t.mongodb.net/admin-user?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology:true,});
var conn =mongoose.Collection;
var termsConditionsSchema =new mongoose.Schema({
     
    title: { type:String},
    text: { type:String},
    isExist: { type:Number},
    //timestamps:true,
});

 var termsConditionsModel = mongoose.model('TermsConditions',termsConditionsSchema);
 module.exports=termsConditionsModel;