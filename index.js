


const keepAlive = require('./server');
const Monitor = require('ping-monitor');



keepAlive();

const monitor = new Monitor({
  website: 'https://t-z2zk.onrender.com',
  title: 'render',
  interval: 3
});

monitor.on('up', (res) => {
  try{
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  //console.log(`${res.website} its on. - ${dateTime}`);
  }
  catch{}
})
monitor.on('down', (res) => {
  try{
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  console.log(`${res.website} it has died - ${res.statusMessage} - ${dateTime}`);
  }
  catch{}
})
monitor.on('stop', (website) => {
  try{
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  console.log(`${website} has stopped. - ${dateTime}`)
  }
  catch{}
});
monitor.on('error', (error) => {
  try{
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  console.log(error + " - " + dateTime)
  }
  catch{}
  });

