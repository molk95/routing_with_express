const express = require("express");
const app = express();
let hour_now = new Date().getHours();

app.get('/', function(req, res) {
  if ( (hour_now>8)&&(hour_now<10) ) res.sendFile(__dirname + '/public/home.html');
  else res.sendFile(__dirname + '/public/outOfService.html');
})

app.use(express.static(__dirname + "/public"));


app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});
