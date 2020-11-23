# Express-mongo-api-setup
This all-in-one module helps you quickly setup your express-mongo api REST project by avoiding installing the most commonly used npm modules.

### Requirement
You need node v 12.19.0 or later to use this package
### Installation

```
npm install express-mongo-api-setup
```
### Usage
```javascript
const { express, bodyParser, compression} = require("express-mongo-api-setup");
const app = express();
app.use(compression());
app.use(bodyParse())

```
#### List of package available

- @sentry/node
- aftaccesscontroler
- bcryptjs
- body-parser
- colors
- compression
- dotenv
- express
- express-mongo-sanitize
- express-validator
- helmet
- hpp
- jsonwebtoken
- moment
- mongoose
- mongoose-autopopulate
- mongoose-paginate-v2
- morgan
- node-mailjet
- password-generator
- slugify
- xss-clean

### All variable list

```javascript
const {
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
    xss} = require("express-mongo-api-setup");

```