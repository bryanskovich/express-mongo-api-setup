const express = require('express')
const Sentry = require('@sentry/node')
const accesscontrol = require('accesscontrol')
const bcryptjs = require('bcryptjs')
const bodyParser = require('body-parser')
const colors = require('colors')
const compression = require('compression')
const dotenv = require('dotenv')
const expressMongoSanitize=require('express-mongo-sanitize')
const expressValidator = require('express-validator')
const helmet = require('helmet')
const hpp = require('hpp')
const jwt = require('jsonwebtoken')
const moment = require('moment')
const mongoose = require('mongoose')
const mongooseAutopopulate = require('mongoose-autopopulate')
const mongoosePaginate = require('mongoose-paginate-v2')
const morgan = require('morgan')
const mailjet = require('node-mailjet')
const slugify = require('slugify')
const xss = require('xss-clean')

module.exports = {
    express,
    Sentry,
    accesscontrol,
    bcryptjs,
    bodyParser,
    colors,
    compression,
    dotenv,
    expressMongoSanitize,
    expressValidator,
    helmet,
    hpp,
    jwt,
    moment,
    mongoose,
    mongooseAutopopulate,
    mongoosePaginate,
    morgan,
    mailjet,
    slugify,
    xss
}