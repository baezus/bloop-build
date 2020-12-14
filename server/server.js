//-------------------------------------Express Config
'use strict';
const http = require('http');
const express = require('express');
const port = process.env.PORT || 2737;
const cors = require('cors');
const app = express();
const server = http.createServer(app);
// const io = require('socket.io')(server, {
//   cors: {
//     origin: '*'
//   }
// });

app.use(express.static(__dirname + '/static'))
app.use(express.static('static'))

//--------------------------------------MIDDLEWARE

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const corsOptions = {
  supports_credentials: true
};
app.use(cookieParser());
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));

//--------------------------------------MONGODB/MONGOOSE

const db = require('./models/index');

//--------------------------------------ROUTES

const routes = require('./routes/');
app.use('/register', routes.users);

//------------------------------------WEBSOCKET CONFIG

let connectedUsers = [];
let sentMessages = [];

// io.on('connection', socket => {
//   const { id } = socket.client;
//   console.log(`User connected: ${id}`);
//   connectedUsers.push(id);
//   console.log(`Current users: `, connectedUsers);

//   socket.on('chat message', ({ nickname, msg }) => {
//     sentMessages.push({ nickname, msg });
//     db.Bloop.create({ 'sender': nickname, 'content': msg })
//       .then((savedBloop) => {
//         console.log('saved Bloop: ', savedBloop);
//       })
//       .catch((err) => {
//         console.log('Error in the controllers create', err);
//         res.json({ Error: 'Unable to create the bloop.'});
//       });
//     console.log('submitted a chat; sentMessages: ', sentMessages);
//     io.emit('chat message', { nickname, msg });
//   });
// });

//------------------------------------SERVER LISTEN

server.listen(port || 2737, function () {
  console.log('Server is running on localhost: 2737!')
});
