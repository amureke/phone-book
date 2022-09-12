"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecords = void 0;
var getRecords = function (connection, res) {
    var query = "SELECT * FROM records";
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).end();
        }
        else {
            res.send(result);
        }
    });
};
exports.getRecords = getRecords;
