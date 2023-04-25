


const keepAlive = require('./server');
const Monitor = require('ping-monitor');



keepAlive();

const monitor = new Monitor({
  website: 'https://t-z2zk.onrender.com',
  title: 'render',
  interval: 3
});

monitor.on('up', (res) => {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  //console.log(`${res.website} its on. - ${dateTime}`);
})
monitor.on('down', (res) => {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  console.log(`${res.website} it has died - ${res.statusMessage} - ${dateTime}`);
})
monitor.on('stop', (website) => {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  console.log(`${website} has stopped. - ${dateTime}`)
});
monitor.on('error', (error) => {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  console.log(error + " - " + dateTime)
});

