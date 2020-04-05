// var fs = require('file-system')
//
// module.exports = {
//     // options
//     devServer: {
//         https: {
//             key: fs.readFileSync('./cert/server.key'),
//             cert: fs.readFileSync('./cert/server.crt'),
//             ca: fs.readFileSync('./cert/rootCA.pem'),
//         },
//         proxy: {
//             '^/api': {
//                 https: false,
//                 target: 'http://api.float.com/v3/',
//                 ws: true,
//                 changeOrigin: true,
//                 secure: false
//             }
//         }
//     }
// }
