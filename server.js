// const http = require("http");
// console.log(http);
//Install express server

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
//const app = express();
app.use(requireHTTPS);

// const express = require('express');
// const path = require('path');


//const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/velzon'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/velzon/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);