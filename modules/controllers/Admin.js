const AdminManager = require("../manager/Admin");

class AdminController {

    async addUser(req,res,next) {
        try{
            return AdminManager.addUser(req,res).then((data) => {
                res.render("add-user",{message:'User Data Insert'});
            }).catch((err) => {
                res.render("add-user",{message:err.message});
              });
        }catch(error){
            next(error);
        }
    }


    async getUsers(req,res,next) {
        try{
            return AdminManager.getUsers(req,res).then((data) => {
                
                res.render("admin-dashboard",{data:data});
            });
        }catch(error){
            next(error);
        }
    }

    async active(req,res,next) {
        try{
            return AdminManager.active(req.params.id).then((data) => {
                
                res.render("admin-dashboard",{data:data});
            });
        }catch(error){
            next(error);
        }
    }

    async inactive(req,res,next) {
        try{
            return AdminManager.inactive(req.params.id).then((data) => {
                
                res.render("admin-dashboard",{data:data});
            });
        }catch(error){
            next(error);
        }
    }


    async termsConditions(req,res,next) {
        try{
            return AdminManager.termsConditions(req,res).then((data) => {
                if(data==100){
                    res.render("terms-conditions",{data:''});
                }else{
                    res.render("terms-conditions",{data:data});
                }
                
            });
        }catch(error){
            next(error);
        }
    }

    async addTermsConditions(req,res,next) {
        try{
            return AdminManager.addTermsConditions(req,res).then((data) => {
                res.render("add-terms-conditions",{message:'Terms & Conditions insert'});
            }).catch((err) => {
                res.render("add-terms-conditions",{message:err.message});
            })
        }catch(error){
            next(error);
        }
    }

    async deleteTermsConditions(req,res,next) {
        try{
            return AdminManager.deleteTermsConditions(req.params.id).then((data) => {
                
                res.redirect("/api/v1/admin/termsConditions");
            });
        }catch(error){
            next(error);
        }
    }

}

module.exports = new AdminController();