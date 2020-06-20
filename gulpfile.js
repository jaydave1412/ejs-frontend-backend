const { src, dest, watch, series, parallel } = require('gulp');
const bro = require('gulp-bro');
//const nodemon = require('gulp-nodemon');

const files={
    client: 'public/*.js',
    server:'server.js'
}

function client(){
    return src(files.client).
    pipe(bro()).
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

