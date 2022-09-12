"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterRecords = void 0;
var filterRecords = function (connection, req, res) {
    var searchBy = Object.keys(req.query)[0];
    var searchFor = req.query[searchBy];
    var query = "SELECT * FROM records WHERE " + searchBy + " LIKE \"%" + searchFor + "%\"";
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
exports.filterRecords = filterRecords;
