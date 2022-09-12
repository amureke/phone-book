"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedData = void 0;
var seedData = function (connection) {
    connection.query("CREATE DATABASE phone_book_db", function (err) {
        if (err) {
            console.log("Warning: Database phone_book_db already exists.");
        }
        else {
            console.log("Database created.");
        }
        connection.query("USE phone_book_db", function (err) {
            if (err)
                throw err;
            console.log("Using phone_book_db database.");
            var createTableQuery = "CREATE TABLE records (\n        id INT(11) NOT NULL AUTO_INCREMENT,\n        first_name VARCHAR(20) NOT NULL,\n        last_name VARCHAR(20) NOT NULL,\n        phone_number VARCHAR(20) NOT NULL,\n        PRIMARY KEY (id)\n      )";
            connection.query(createTableQuery, function (err) {
                if (err) {
                    console.log("Warning: Table records already exists.");
                }
                else {
                    console.log("Table 'records' created.");
                    var insertRowsQuery = "INSERT INTO records (\n            first_name,\n            last_name,\n            phone_number\n          ) VALUES ?";
                    var values = [
                        ["Jon", "Doe", "857-896-1251"],
                        ["Frank", "Jacob", "458-625-7412"],
                        ["Joseph", "Bo", "452-786-3214"],
                        ["Smith", "Kelton", "895-412-3562"],
                        ["Kent", "Royce", "784-512-6325"],
                    ];
                    connection.query(insertRowsQuery, [values], function (err, result) {
                        if (err)
                            throw err;
                        console.log(result.affectedRows + " rows created.");
                    });
                }
            });
        });
    });
};
exports.seedData = seedData;
