"use strict";
const UserModel = require("../models/Users");
const TermsConditionsModel = require("../models/TermsConditions");
const md5 = require("md5");
const BadRequestError = require("../errors/badRequestError");

let getUsers = async () => {
  let users = await UserModel.find({});
  let userList = users.map((user) => {
    return user;
  });
  return userList;
};

let userLogin = async (req, res) => {
  try {
    const { body } = req;
    ["email", "password"].forEach((x) => {
      if (!body[x]) {
        throw new BadRequestError(x + " is required");
      }
    });
    let user = await UserModel.findOne({
      email: body.email,
      password: md5(body.password),
    });
    if (!user) {
      throw Error("User doesn't exist");
    }

    let userPermission = await UserModel.findOne({
      email: body.email,
      password: md5(body.password),
      status: 1,
    });
    if (!userPermission) {
      throw Error("Permission deny from admin");
    }

    let userData = await UserModel.findOne({ email: body.email });
    let termsConditions = await TermsConditionsModel.findOne({ isExist: 1 });
    if(termsConditions){
      return { userData, termsConditions };
    }else{
      return { userData, termsConditions:100 };
    }
  } catch (error) {
    throw Error(error);
  }
};

let TermsConditionsAccept = async (req, res) => {
  const { body } = req;

  let user = await UserModel.findByIdAndUpdate(body.objectid, {
    isTermsConditionAccepted: 1,
  });
  return user;
};
module.exports = {
  userLogin,
  getUsers,
  TermsConditionsAccept,
};
