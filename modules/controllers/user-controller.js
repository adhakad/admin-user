const UsersManager = require("../manager/user-manager");

class UserController {
  async getUsers(req, res, next) {
    try {
      return UsersManager.getUsers().then((data) => {
        res.render("user-dashboard", { data: data });
      });
    } catch (error) {
      next(error);
    }
  }

  async userLogin(req, res, next) {
    try {
      return UsersManager.userLogin(req, res)
        .then(({ userData, termsConditions }) => {
          if (userData.isTermsConditionAccepted == 1) {
            res.redirect("/api/v1/users/getUsers");
          }else if(termsConditions==100){
            res.redirect("/api/v1/users/getUsers");
          }else if (userData.isTermsConditionAccepted == 0) {
            res.render("terms-conditions-accept", {
              userData: userData,
              termsConditions,
            });
          }
        })
        .catch((err) => {
          res.render("user-login", { message: err.message });
        });
    } catch (error) {
      next(error);
    }
  }
  async TermsConditionsAccept(req, res, next) {
    try {
      return UsersManager.TermsConditionsAccept(req, res).then((data) => {
        res.redirect("/api/v1/users/getUsers");
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
