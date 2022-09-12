"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecord = void 0;
var getRecords_1 = require("./getRecords");
var createRecord = function (connection, req, res) {
    var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, phoneNumber = _a.phoneNumber;
    var query = "INSERT INTO records (first_name, last_name, phone_number) VALUES (\"" + firstName + "\", \"" + lastName + "\", \"" + phoneNumber + "\")";
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).end();
        }
        else {
            console.log(result.affectedRows + " rows created.");
            (0, getRecords_1.getRecords)(connection, res);
        }
    });
};
exports.createRecord = createRecord;
