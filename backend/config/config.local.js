"use strict";

exports.sequelize = {
  dialect: "mysql",
  database: "blog_development",
  host: "127.0.0.1",
  port: "3306",
  username: "root",
  password: "root",
  timezone: "Asia/Shanghai"
};

exports.security = {
  csrf: {
    enable: false
  }
};
