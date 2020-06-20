const { src, dest, watch, series, parallel } = require('gulp');
const browserify = require('gulp-browserify');
const nodemon = require('gulp-nodemon');

const files={
    client: 'public/app.js',
    server:'server.js'
}

function client(){
    return src(files.client).
    pipe(browserify()).
    pipe(dest('public/dist'))
}
// function server(){
//     return  nodemon({
//         script: files.server,
        
//       })
// }

function watchTask(){
    watch([files.client],client)
}

exports.default = series(client,watchTask)

