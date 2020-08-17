#!/usr/bin/env node

console.log(process.argv) // process.argv可以拿到命令行传递的参数

process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..'))

require('gulp/bin/gulp')

