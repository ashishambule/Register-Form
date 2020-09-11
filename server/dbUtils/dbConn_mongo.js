const mongoose = require("mongoose");
const { User } = require("../models/User");

let db_ops = {};
db_ops.mongoUrl = `mongodb://${
  process.env.MONGO_HOST || "localhost"
}:27017/useronboarding`;

db_ops.getData = () => {
  return new Promise((resolve, reject) => {
    User.find()
      .then((users) => {
        resolve(users);
      })
      .catch((err) => reject(err));
  });
};

db_ops.findByEmail = (mail) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: mail })
      .then((users) => {
        resolve(users);
      })
      .catch((err) => reject(err));
  });
};

db_ops.setData = (data) => {
  return new Promise((resolve, reject) => {
    let userData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
      checked: data.checked,
    };
    User.create(userData)
      .then((userDetails) => resolve(userDetails))
      .catch((err) => reject(err));
  });
};

module.exports = { db_ops };
