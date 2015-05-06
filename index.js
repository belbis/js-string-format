// use coverage src if requested
var src = process.env.SFORMAT_COV ? "/src-cov/" : "/src/";
module.exports = require(__dirname + src + "stringFormat.js");