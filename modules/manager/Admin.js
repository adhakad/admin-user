'use strict';
const UserModel = require("../models/Users");
const TermsConditionsModel = require("../models/TermsConditions");
const md5 = require("md5");
const BadRequestError = require("../errors/badRequestError");

let addUser = async (req,res) => {
    const { body } = req;
    ["email", "password"].forEach((x) => {
        if(!body[x]) {
            throw new BadRequestError(x, "is required");
        }
    });
    
    let user = await UserModel.findOne({ email:body.email });
    if (user) {
        throw Error("User already exist");
    }

    let createData = {
        name: body.name,
        email:body.email,
        password:md5(body.password),
        status:0,
        isTermsConditionAccepted:0,
    }

    try{
        const d = await UserModel.create(createData);
        return d;

    }catch(error){
        console.log(error);
    }
}
let getUsers = async () => {
    let users = await UserModel.find({});
      let userList = users.map((user) => {
        return user;
      });
    return userList;
}
let active = async (id) => {
    await UserModel.findByIdAndUpdate(id,{status:0});
    let Allusers = await UserModel.find({});
      let userList = Allusers.map((user) => {
        return user;
      });
    return userList;
}
let inactive = async (id) => {
  await UserModel.findByIdAndUpdate(id,{status:1});
  let Allusers = await UserModel.find({});
    let userList = Allusers.map((user) => {
      return user;
    });
  return userList;
}

let termsConditions = async () => {
  let termsConditions = await TermsConditionsModel.findOne({isExist:1});
    return termsConditions;
  
  
}

let addTermsConditions = async (req,res) => {
  const { body } = req;
  ["title", "text"].forEach((x) => {
      if(!body[x]) {
          throw new BadRequestError(x, "is required");
      }
  });
  
  let termsCondition = await TermsConditionsModel.findOne({ isExist:1 });
  if (termsCondition) {
      throw Error("Terms & Conditions already exist");
  }

  let createData = {
      title: body.title,
      text:body.text,
      isExist:1,
  }

  try{
      const d = await TermsConditionsModel.create(createData);
      return d;

  }catch(error){
      console.log(error);
  }
}

let deleteTermsConditions = async (id) => {
  await TermsConditionsModel.findByIdAndDelete(id);
  let AllTermsCondition = await TermsConditionsModel.find({});
    let List = AllTermsCondition.map((termsCondition) => {
      return termsCondition;
    });
  return List;
}



module.exports = {
    addUser,
    getUsers,
    active,
    inactive,
    termsConditions,
    addTermsConditions,
    deleteTermsConditions,
}