require("dotenv").config();

module.exports = {
  "type": "postgres",
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "synchronize": true,
  "logging": false,
  "entities": [
    "build/model/**/*.js"
  ],
  "migrations": [
    "build/migration/**/*.js"
  ],
  "subscribers": [
    "build/subscriber/**/*.js"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}
