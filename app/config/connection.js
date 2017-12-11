var sql = require("mssql");

//Initiallising connection string
var dbConfig = {
    user:  "sa",
    password: "shubham",
    server: "localhost",
    database: "User"
};

exports.executeQuery = function(res, query){	
	sql.connect(dbConfig, function (err) {
		if (err) {   
			console.log("Error while connecting database :- " + err);
			res.send(err);
		}
		else {
			// create Request object
			var request = new sql.Request();
			// query to the database
			request.query(query, function (err, res) {
				if (err) {
					console.log("Error while querying database :- " + err);
					res.send(err);
				}
				else {
					res.send(res);
				}
			});
		}
	});	
};