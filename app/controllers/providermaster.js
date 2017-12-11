var connection = require('../config/connection');

exports.getRecord = function(req, res){
      var query = "select * from [user]";
    	connection.executeQuery (res, query);
};

exports.postRecord = function(req, res){
      var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password)";
    	connection.executeQuery (res, query);
};

exports.putRecord = function(req, res){
      var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    	connection.executeQuery (res, query);
  };

exports.deleteRecord = function(req, res){
      var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
    	connection.executeQuery (res, query);
  };
