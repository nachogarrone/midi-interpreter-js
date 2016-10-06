/**
 * Created by Emanuel Chalela on 5/10/2016.
 */
var fs = require("fs");
var jison = require("jison");

var bnf = fs.readFileSync("grammar.jison", "utf8");
var parser = new jison.Parser(bnf);

module.exports = parser;