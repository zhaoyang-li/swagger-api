/**
 * Created by Arthur on 2020/4/17.
 */
const parse = require('./lib/parse.js')
const codegen = require('./lib/codegen.js')
module.exports = function (opt) {
    let data = parse(opt)
    let codeResult = codegen(data)
    return codeResult
}