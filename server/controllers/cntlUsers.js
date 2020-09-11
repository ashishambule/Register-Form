'use strict';
const Step = require('step');

const { db_ops } = require('../dbUtils/dbConn_mongo');

module.exports = class UserController {
  constructor(_name) {
    this.name = _name;
    console.info(this.name + ' initialized');
  }

  addUser(req, res, next) {
    let self = this;
    let statusCode = 400;
    console.log('addUser ::::: ', req.body);
    if (req.body && req.body.email) {
      Step(
        function _findByEmail() {
          self.findByEmail(req.body.email, this);
        },

        function _addUser(err, resp) {
          if (err) {
            throw 'Unable to retrive data!';
          } else if (resp) {
            console.log('resp :::: ', resp);
            statusCode = 202;
            throw 'Record already exist';
          } else {
            self.setData(req.body, this);
          }
        },

        function _sendResponse(err, _resp) {
          if (err) {
            console.error(err);
            res.status(statusCode).send({
              status: false,
              message: 'Unable to retrive data!',
              error: err,
              response: null,
            });
          } else {
            res.status(200).send({
              status: true,
              message: 'success',
              error: null,
              response: _resp,
            });
          }
        }
      );
    } else {
      console.log('addUser :::::  else ');
      res.status(200).send({
        status: false,
        message: 'Required fileds are missing...',
        error: null,
      });
    }
  }

  async getData(cb) {
    db_ops
      .getData()
      .then((users) => {
        return cb(null, users);
      })
      .catch((err) => {
        return cb(err, null);
      });
  }

  async findByEmail(mail, cb) {
    try {
      let email = await db_ops.findByEmail(mail);
      return cb(null, email);
    } catch (err) {
      return cb(err, null);
    }
  }

  async setData(body, cb) {
    db_ops
      .setData(body)
      .then((user) => {
        return cb(null, user);
      })
      .catch((err) => {
        return cb(err, null);
      });
  }
};
