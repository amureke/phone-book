"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var mysql = __importStar(require("mysql"));
var seedData_1 = require("./db/seedData");
var getRecords_1 = require("./db/getRecords");
var filterRecords_1 = require("./db/filterRecords");
var createRecord_1 = require("./db/createRecord");
var deleteRecord_1 = require("./db/deleteRecord");
var publicPath = path.join(__dirname, "client", "public");
var port = process.env.PORT || 5000;
var app = (0, express_1.default)();
app.use(express_1.default.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var connectionConfig = {
    host: "localhost",
    user: "root",
    password: "",
};
var connection = mysql.createConnection(connectionConfig);
connection.connect(function (err) {
    if (err) {
        console.log("Connection failed.");
    }
    else {
        console.log("Connected to mysql.");
        try {
            (0, seedData_1.seedData)(connection);
        }
        catch (err) {
            console.log(err);
        }
    }
});
setInterval(function () {
    connection.query("SELECT 1");
}, 5000);
app.get("/api/records", function (req, res) {
    (0, getRecords_1.getRecords)(connection, res);
});
app.get("/api/filter_records", function (req, res) {
    (0, filterRecords_1.filterRecords)(connection, req, res);
});
app.post("/api/records", function (req, res) {
    (0, createRecord_1.createRecord)(connection, req, res);
});
app.delete("/api/records", function (req, res) {
    (0, deleteRecord_1.deleteRecord)(connection, req, res);
});
app.get("*", function (req, res) {
    res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, function () { return console.log("Server running on port " + port + "."); });
