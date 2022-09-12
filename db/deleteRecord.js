"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecord = void 0;
var getRecords_1 = require("./getRecords");
var deleteRecord = function (connection, req, res) {
    var query = "DELETE FROM records WHERE id = " + req.query.id;
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).end();
        }
        else {
            console.log(result.affectedRows + " rows deleted.");
            (0, getRecords_1.getRecords)(connection, res);
        }
    });
};
exports.deleteRecord = deleteRecord;
