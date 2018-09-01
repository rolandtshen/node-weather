// const request = require('request');
// const argv = require('yargs').argv;

const express = require('express')
//const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})

app.post('/', function(req, res) {
  
})

let apiKey = "4282babee20db9c3497ea2d3f298e357"
let city = argv.c || "San Francisco"
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
