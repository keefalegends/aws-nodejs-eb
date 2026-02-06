// Load the AWS SDK
var AWS = require('aws-sdk')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// Set region for AWS SDKs
AWS.config.region = process.env.REGION

var app = express()

// View engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Static files (INI KUNCI BOOTSTRAP)
app.use('/static', express.static(path.join(__dirname, 'static')))

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.get('/', function (req, res) {
  res.render('index', {
    title: 'BackSpace Academy & Elastic Beanstalk'
  })
})

// Port (WAJIB buat Elastic Beanstalk)
var port = process.env.PORT || 3000

// LOGS FOR BEANSTALK
app.listen(port, function () {
  console.log('====================================')
  console.log('App running on AWS Elastic Beanstalk')
  console.log('Port:', port)
  console.log('Environment:', process.env.NODE_ENV)
  console.log('====================================')
})
