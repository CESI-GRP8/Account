const express = require("express")
const router = express.Router();

const authController = require("../controllers/account.controllers")

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - type
 *              - firstname
 *              - surname
 *              - email
 *              - password
 *              - address
 *              - phone
 *              - userSponsorCode
 *          properties:
 *              id:
 *                  type: interger
 *                  description: User identification
 *              type:
 *                  type: string
 *                  description: Type of the user
 *              firstname:
 *                  type: string
 *                  description: Firstname of the user
 *              surname:
 *                  type: string
 *                  description: Surname of the user
 *              email:
 *                  type: string
 *                  description: Email of the user
 *              password:
 *                  type: string
 *                  description: Encrypted password of the user
 *              address:
 *                  type: string
 *                  description: Address of the user
 *              phone:
 *                  type: string
 *                  description: Phone of the user
 *              sponsorCode:
 *                  type: string
 *                  description: SponsorCode of another user to be sponsor by the other user
 *              userSponsorCode:
 *                  type: string
 *                  description: Generated user sponsor code of the user
 *      Restorer:
 *          type: object
 *          required:
 *              - type
 *              - firstname
 *              - surname
 *              - email
 *              - password
 *              - restaurantType
 *              - restaurantName
 *              - restaurantAddress
 *              - restaurantPhone
 *              - restorerSponsorCode
 *          properties:
 *              id:
 *                  type: interger
 *                  description: Restorer identification
 *              type:
 *                  type: string
 *                  description: Type of the restorer
 *              firstname:
 *                  type: string
 *                  description: Firstname of the restorer
 *              surname:
 *                  type: string
 *                  description: Surname of the restorer
 *              email:
 *                  type: string
 *                  description: Email of the restorer
 *              password:
 *                  type: string
 *                  description: Encrypted password of the restorer
 *              restaurantType:
 *                  type: string
 *                  description: Type of the restaurant
 *              restaurantName:
 *                  type: string
 *                  description: Name of the restaurant
 *              restaurantAddress:
 *                  type: string
 *                  description: Address of the restaurant
 *              restaurantPhone:
 *                  type: string
 *                  description: Phone of the restaurant
 *              sponsorCode:
 *                  type: string
 *                  description: SponsorCode of another restorer to be sponsor by the other restorer
 *              restorerSponsorCode:
 *                  type: string
 *                  description: Generated restorer sponsor code of the restorer
 *      Deliverer:
 *          type: object
 *          required:
 *              - type
 *              - firstname
 *              - surname
 *              - email
 *              - password
 *              - phone
 *              - delivererSponsorCode
 *          properties:
 *              id:
 *                  type: interger
 *                  description: Deliverer identification
 *              type:
 *                  type: string
 *                  description: Type of the deliverer
 *              firstname:
 *                  type: string
 *                  description: Firstname of the deliverer
 *              surname:
 *                  type: string
 *                  description: Surname of the deliverer
 *              email:
 *                  type: string
 *                  description: Email of the deliverer
 *              password:
 *                  type: string
 *                  description: Encrypted password of the deliverer
 *              phone:
 *                  type: string
 *                  description: Phone of the deliverer
 *              sponsorCode:
 *                  type: string
 *                  description: SponsorCode of another deliverer to be sponsor by the other deliverer
 *              delivererSponsorCode:
 *                  type: string
 *                  description: Generated deliverer sponsor code of the deliverer
 *      Marketing:
 *          type: object
 *          required:
 *              - type
 *              - firstname
 *              - surname
 *              - email
 *              - password
 *              - phone
 *          properties:
 *              id:
 *                  type: interger
 *                  description: Marketing identification
 *              type:
 *                  type: string
 *                  description: Type of the marketing
 *              firstname:
 *                  type: string
 *                  description: Firstname of the marketing
 *              surname:
 *                  type: string
 *                  description: Surname of the marketing
 *              email:
 *                  type: string
 *                  description: Email of the marketing
 *              password:
 *                  type: string
 *                  description: Encrypted password of the marketing
 *              phone:
 *                  type: string
 *                  description: Phone of the marketing
 *      Administrator:
 *          type: object
 *          required:
 *              - type
 *              - firstname
 *              - surname
 *              - email
 *              - password
 *              - phone
 *          properties:
 *              id:
 *                  type: interger
 *                  description: Administrator identification
 *              type:
 *                  type: string
 *                  description: Type of the administrator
 *              firstname:
 *                  type: string
 *                  description: Firstname of the administrator
 *              surname:
 *                  type: string
 *                  description: Surname of the administrator
 *              email:
 *                  type: string
 *                  description: Email of the administrator
 *              password:
 *                  type: string
 *                  description: Encrypted password of the administrator
 *              phone:
 *                  type: string
 *                  description: Phone of the administrator
 */

/**
  * @swagger
  * tags:
  *   name: Service
  */

/**
  * @swagger
  * tags:
  *   name: Authentication
  */

/**
  * @swagger
  * tags:
  *   name: Users
  */

/**
 * @swagger
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 *      security:
 *          - bearerAuth: []   
 */

/**
 * @swagger
 * /1.0/accounts/check:
 *  get:
 *      summury: Return a message to check if the API is up
 *      tags: [Service]
 *      responses:
 *          200:
 *              description: API is working
 */
router.get("/check", (req, res) => {
  res.status(200).json({ message: "API is up!" })
})

router.get("/authenticate", authController.authenticate)

/**
 * @swagger
 * /1.0/accounts/register:
 *  post:
 *      summury: Register a new user
 *      tags: [Authentication]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      example:
 *                          type: user
 *                          firstname: user
 *                          surname: USER
 *                          email: user@user.fr
 *                          password: user
 *                          address: user
 *                          phone: 06.12.12.12.12
 *                          sponsorCode: edb2103b-e3cb-4273-a446-404d742d2528
 *      responses:
 *          200:
 *              description: User created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example:
 *                              id: 660fb5743330dc816f37795b
 *                              type: user
 *                              firstname: user
 *                              surname: USER
 *                              email: user@user.fr
 *                              password: $2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6
 *                              address: user
 *                              phone: 06.12.12.12.12
 *                              sponsorCode: edb2103b-e3cb-4273-a446-404d742d2528
 *                              userSponsorCode: edb2103b-e3cb-4273-a446-404d742d2527
 *          400:
 *              description: Bad request
 */
router.post("/register", authController.register)

/**
 * @swagger
 * /1.0/accounts/login:
 *  post:
 *      summury: Login a user
 *      tags: [Authentication]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      example:
 *                          email: user@user.fr
 *                          password: user
 *      responses:
 *          200:
 *              description: User connected
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example:
 *                              message: You are now connected!
 *                              id: 660fb5743330dc816f37795b
 *                              token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiNjYwZmI1NzQzMzMwZGM4MTZmMzc3OTViIiwiZXhwIjoxNzEyOTM0MTE2LCJpYXQiOjE3MTI4NDc3MTZ9.rNsTGzU72uHRbvY93nzUMsDTs9XIcbXgGzZgsugn49E
 *          400:
 *              description: Bad request
 */
router.post("/login", authController.login)


/**
 * @swagger
 * /1.0/accounts/all:
 *  get:
 *      summury: Get all users
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Return all users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: [{"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0},{"_id":"660fb61b07e9e1b3de83d4fa","type":"restorer","firstname":"restorer","surname":"RESTORER","email":"restorer@restorer.fr","password":"$2b$10$9rlmnK5ew2CfbPoiNY.dyO8iMcR9WZSJaynyiN3m7RmjJiiynEv/u","restaurantType":"restorer","restaurantName":"restorer","restaurantAddress":"restorer","restaurantPhone":"06.12.12.12.12","sponsorCode":"","restorerSponsorCode":"babb181c-72a6-4130-a975-f983ee77564c","__v":0},{"_id":"660fdeabf78d7cadafaabc9b","type":"deliverer","firstname":"deliverer","surname":"DELIVERER","email":"deliverer@deliverer.fr","password":"$2b$10$Bf6DgyZqBytme2e3kydgq.mbhERZkHF3XWFdLCwoWqrGmY8mOkc92","phone":"06.12.12.12.12","sponsorCode":"","delivererSponsorCode":"49c4f9e0-91b3-4d26-8607-2eccbe02f9e8","__v":0},{"_id":"660ff62546b23c5a12294d61","type":"developer","firstname":"developer","surname":"DEVELOPER","email":"developer@developer.fr","password":"$2b$10$rkzGHk6yih.nibTh.yRY5.qu80NBo3cpSL/TANJ8X1Qy.XzFE9cca","phone":"06.12.12.12.12","__v":0},{"_id":"660fe5b684d11aeb2bb3fcdd","type":"marketing","firstname":"marketing","surname":"MARKETING","email":"marketing@marketing.fr","password":"$2b$10$DofxL.ZnnW8C/ASySkZK4O0ljSuOiAt3IQAeSwKBrcCcIuCFh3x6G","phone":"06.12.12.12.12","__v":0},{"_id":"660fdbd6cb546825b69a643f","type":"administrator","firstname":"administrator","surname":"ADMINISTRATOR","email":"administrator@administrator.fr","password":"$2b$10$/uwFsMW3w2alpMsrRYcwm./Io72BVcn0nQjkqjE2FLD7jC0onv5AS","phone":"06.12.12.12.12","__v":0}]
 *          400:
 *              description: Bad request
 */
router.get("/all", authController.readAll)

/**
 * @swagger
 * /1.0/accounts/all/{id}:
 *  get:
 *      summury: Get specified user
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Return specified user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.get("/all/:id", authController.readAll)

/**
 * @swagger
 * /1.0/accounts/users:
 *  get:
 *      summury: Get all users from user collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Return all users from user collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: [{"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0},{"_id":"660fb61b07e9e1b3de83d4fa","type":"restorer","firstname":"restorer","surname":"RESTORER","email":"restorer@restorer.fr","password":"$2b$10$9rlmnK5ew2CfbPoiNY.dyO8iMcR9WZSJaynyiN3m7RmjJiiynEv/u","restaurantType":"restorer","restaurantName":"restorer","restaurantAddress":"restorer","restaurantPhone":"06.12.12.12.12","sponsorCode":"","restorerSponsorCode":"babb181c-72a6-4130-a975-f983ee77564c","__v":0},{"_id":"660fdeabf78d7cadafaabc9b","type":"deliverer","firstname":"deliverer","surname":"DELIVERER","email":"deliverer@deliverer.fr","password":"$2b$10$Bf6DgyZqBytme2e3kydgq.mbhERZkHF3XWFdLCwoWqrGmY8mOkc92","phone":"06.12.12.12.12","sponsorCode":"","delivererSponsorCode":"49c4f9e0-91b3-4d26-8607-2eccbe02f9e8","__v":0},{"_id":"660ff62546b23c5a12294d61","type":"developer","firstname":"developer","surname":"DEVELOPER","email":"developer@developer.fr","password":"$2b$10$rkzGHk6yih.nibTh.yRY5.qu80NBo3cpSL/TANJ8X1Qy.XzFE9cca","phone":"06.12.12.12.12","__v":0},{"_id":"660fe5b684d11aeb2bb3fcdd","type":"marketing","firstname":"marketing","surname":"MARKETING","email":"marketing@marketing.fr","password":"$2b$10$DofxL.ZnnW8C/ASySkZK4O0ljSuOiAt3IQAeSwKBrcCcIuCFh3x6G","phone":"06.12.12.12.12","__v":0},{"_id":"660fdbd6cb546825b69a643f","type":"administrator","firstname":"administrator","surname":"ADMINISTRATOR","email":"administrator@administrator.fr","password":"$2b$10$/uwFsMW3w2alpMsrRYcwm./Io72BVcn0nQjkqjE2FLD7jC0onv5AS","phone":"06.12.12.12.12","__v":0}]
 *          400:
 *              description: Bad request
 */
router.get("/users", authController.readUser)

/**
 * @swagger
 * /1.0/accounts/users/{id}:
 *  get:
 *      summury: Get specified user from user collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Return specified user from user collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.get("/users/:id", authController.readUser)

/**
 * @swagger
 * /1.0/accounts/restorers:
 *  get:
 *      summury: Get all restorers from restorer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Return all restorers from restorer collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: [{"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0},{"_id":"660fb61b07e9e1b3de83d4fa","type":"restorer","firstname":"restorer","surname":"RESTORER","email":"restorer@restorer.fr","password":"$2b$10$9rlmnK5ew2CfbPoiNY.dyO8iMcR9WZSJaynyiN3m7RmjJiiynEv/u","restaurantType":"restorer","restaurantName":"restorer","restaurantAddress":"restorer","restaurantPhone":"06.12.12.12.12","sponsorCode":"","restorerSponsorCode":"babb181c-72a6-4130-a975-f983ee77564c","__v":0},{"_id":"660fdeabf78d7cadafaabc9b","type":"deliverer","firstname":"deliverer","surname":"DELIVERER","email":"deliverer@deliverer.fr","password":"$2b$10$Bf6DgyZqBytme2e3kydgq.mbhERZkHF3XWFdLCwoWqrGmY8mOkc92","phone":"06.12.12.12.12","sponsorCode":"","delivererSponsorCode":"49c4f9e0-91b3-4d26-8607-2eccbe02f9e8","__v":0},{"_id":"660ff62546b23c5a12294d61","type":"developer","firstname":"developer","surname":"DEVELOPER","email":"developer@developer.fr","password":"$2b$10$rkzGHk6yih.nibTh.yRY5.qu80NBo3cpSL/TANJ8X1Qy.XzFE9cca","phone":"06.12.12.12.12","__v":0},{"_id":"660fe5b684d11aeb2bb3fcdd","type":"marketing","firstname":"marketing","surname":"MARKETING","email":"marketing@marketing.fr","password":"$2b$10$DofxL.ZnnW8C/ASySkZK4O0ljSuOiAt3IQAeSwKBrcCcIuCFh3x6G","phone":"06.12.12.12.12","__v":0},{"_id":"660fdbd6cb546825b69a643f","type":"administrator","firstname":"administrator","surname":"ADMINISTRATOR","email":"administrator@administrator.fr","password":"$2b$10$/uwFsMW3w2alpMsrRYcwm./Io72BVcn0nQjkqjE2FLD7jC0onv5AS","phone":"06.12.12.12.12","__v":0}]
 *          400:
 *              description: Bad request
 */
router.get("/restorers/", authController.readRestorer)

/**
 * @swagger
 * /1.0/accounts/restorers/{id}:
 *  get:
 *      summury: Get specified restorer from restorer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Return specified restorer from restorer collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.get("/restorers/:id", authController.readRestorer)

/**
 * @swagger
 * /1.0/accounts/deliverers:
 *  get:
 *      summury: Get all deliverers from deliverer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Return all deliverers from deliverer collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: [{"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0},{"_id":"660fb61b07e9e1b3de83d4fa","type":"restorer","firstname":"restorer","surname":"RESTORER","email":"restorer@restorer.fr","password":"$2b$10$9rlmnK5ew2CfbPoiNY.dyO8iMcR9WZSJaynyiN3m7RmjJiiynEv/u","restaurantType":"restorer","restaurantName":"restorer","restaurantAddress":"restorer","restaurantPhone":"06.12.12.12.12","sponsorCode":"","restorerSponsorCode":"babb181c-72a6-4130-a975-f983ee77564c","__v":0},{"_id":"660fdeabf78d7cadafaabc9b","type":"deliverer","firstname":"deliverer","surname":"DELIVERER","email":"deliverer@deliverer.fr","password":"$2b$10$Bf6DgyZqBytme2e3kydgq.mbhERZkHF3XWFdLCwoWqrGmY8mOkc92","phone":"06.12.12.12.12","sponsorCode":"","delivererSponsorCode":"49c4f9e0-91b3-4d26-8607-2eccbe02f9e8","__v":0},{"_id":"660ff62546b23c5a12294d61","type":"developer","firstname":"developer","surname":"DEVELOPER","email":"developer@developer.fr","password":"$2b$10$rkzGHk6yih.nibTh.yRY5.qu80NBo3cpSL/TANJ8X1Qy.XzFE9cca","phone":"06.12.12.12.12","__v":0},{"_id":"660fe5b684d11aeb2bb3fcdd","type":"marketing","firstname":"marketing","surname":"MARKETING","email":"marketing@marketing.fr","password":"$2b$10$DofxL.ZnnW8C/ASySkZK4O0ljSuOiAt3IQAeSwKBrcCcIuCFh3x6G","phone":"06.12.12.12.12","__v":0},{"_id":"660fdbd6cb546825b69a643f","type":"administrator","firstname":"administrator","surname":"ADMINISTRATOR","email":"administrator@administrator.fr","password":"$2b$10$/uwFsMW3w2alpMsrRYcwm./Io72BVcn0nQjkqjE2FLD7jC0onv5AS","phone":"06.12.12.12.12","__v":0}]
 *          400:
 *              description: Bad request
 */
router.get("/deliverers/", authController.readDeliverer)

/**
 * @swagger
 * /1.0/accounts/deliverers/{id}:
 *  get:
 *      summury: Get specified deliverer from deliverer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Return specified deliverer from deliverer collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.get("/deliverers/:id", authController.readDeliverer)

/**
 * @swagger
 * /1.0/accounts/developers:
 *  get:
 *      summury: Get all developers from developer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Return all developers from developer collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: [{"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0},{"_id":"660fb61b07e9e1b3de83d4fa","type":"restorer","firstname":"restorer","surname":"RESTORER","email":"restorer@restorer.fr","password":"$2b$10$9rlmnK5ew2CfbPoiNY.dyO8iMcR9WZSJaynyiN3m7RmjJiiynEv/u","restaurantType":"restorer","restaurantName":"restorer","restaurantAddress":"restorer","restaurantPhone":"06.12.12.12.12","sponsorCode":"","restorerSponsorCode":"babb181c-72a6-4130-a975-f983ee77564c","__v":0},{"_id":"660fdeabf78d7cadafaabc9b","type":"deliverer","firstname":"deliverer","surname":"DELIVERER","email":"deliverer@deliverer.fr","password":"$2b$10$Bf6DgyZqBytme2e3kydgq.mbhERZkHF3XWFdLCwoWqrGmY8mOkc92","phone":"06.12.12.12.12","sponsorCode":"","delivererSponsorCode":"49c4f9e0-91b3-4d26-8607-2eccbe02f9e8","__v":0},{"_id":"660ff62546b23c5a12294d61","type":"developer","firstname":"developer","surname":"DEVELOPER","email":"developer@developer.fr","password":"$2b$10$rkzGHk6yih.nibTh.yRY5.qu80NBo3cpSL/TANJ8X1Qy.XzFE9cca","phone":"06.12.12.12.12","__v":0},{"_id":"660fe5b684d11aeb2bb3fcdd","type":"marketing","firstname":"marketing","surname":"MARKETING","email":"marketing@marketing.fr","password":"$2b$10$DofxL.ZnnW8C/ASySkZK4O0ljSuOiAt3IQAeSwKBrcCcIuCFh3x6G","phone":"06.12.12.12.12","__v":0},{"_id":"660fdbd6cb546825b69a643f","type":"administrator","firstname":"administrator","surname":"ADMINISTRATOR","email":"administrator@administrator.fr","password":"$2b$10$/uwFsMW3w2alpMsrRYcwm./Io72BVcn0nQjkqjE2FLD7jC0onv5AS","phone":"06.12.12.12.12","__v":0}]
 *          400:
 *              description: Bad request
 */
router.get("/developers/", authController.readDeveloper)

/**
 * @swagger
 * /1.0/accounts/developers/{id}:
 *  get:
 *      summury: Get specified developer from developer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Return specified developer from developer collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.get("/developers/:id", authController.readDeveloper)

/**
 * @swagger
 * /1.0/accounts/marketing:
 *  get:
 *      summury: Get all marketing from marketing collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Return all marketing from marketing collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: [{"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0},{"_id":"660fb61b07e9e1b3de83d4fa","type":"restorer","firstname":"restorer","surname":"RESTORER","email":"restorer@restorer.fr","password":"$2b$10$9rlmnK5ew2CfbPoiNY.dyO8iMcR9WZSJaynyiN3m7RmjJiiynEv/u","restaurantType":"restorer","restaurantName":"restorer","restaurantAddress":"restorer","restaurantPhone":"06.12.12.12.12","sponsorCode":"","restorerSponsorCode":"babb181c-72a6-4130-a975-f983ee77564c","__v":0},{"_id":"660fdeabf78d7cadafaabc9b","type":"deliverer","firstname":"deliverer","surname":"DELIVERER","email":"deliverer@deliverer.fr","password":"$2b$10$Bf6DgyZqBytme2e3kydgq.mbhERZkHF3XWFdLCwoWqrGmY8mOkc92","phone":"06.12.12.12.12","sponsorCode":"","delivererSponsorCode":"49c4f9e0-91b3-4d26-8607-2eccbe02f9e8","__v":0},{"_id":"660ff62546b23c5a12294d61","type":"developer","firstname":"developer","surname":"DEVELOPER","email":"developer@developer.fr","password":"$2b$10$rkzGHk6yih.nibTh.yRY5.qu80NBo3cpSL/TANJ8X1Qy.XzFE9cca","phone":"06.12.12.12.12","__v":0},{"_id":"660fe5b684d11aeb2bb3fcdd","type":"marketing","firstname":"marketing","surname":"MARKETING","email":"marketing@marketing.fr","password":"$2b$10$DofxL.ZnnW8C/ASySkZK4O0ljSuOiAt3IQAeSwKBrcCcIuCFh3x6G","phone":"06.12.12.12.12","__v":0},{"_id":"660fdbd6cb546825b69a643f","type":"administrator","firstname":"administrator","surname":"ADMINISTRATOR","email":"administrator@administrator.fr","password":"$2b$10$/uwFsMW3w2alpMsrRYcwm./Io72BVcn0nQjkqjE2FLD7jC0onv5AS","phone":"06.12.12.12.12","__v":0}]
 *          400:
 *              description: Bad request
 */
router.get("/marketing/", authController.readMarketing)

/**
 * @swagger
 * /1.0/accounts/marketing/{id}:
 *  get:
 *      summury: Get specified marketing from marketing collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Return specified marketing from marketing collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.get("/marketing/:id", authController.readMarketing)

/**
 * @swagger
 * /1.0/accounts/administrators:
 *  get:
 *      summury: Get all administrators from administrator collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Return all administrators from administrator collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: [{"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0},{"_id":"660fb61b07e9e1b3de83d4fa","type":"restorer","firstname":"restorer","surname":"RESTORER","email":"restorer@restorer.fr","password":"$2b$10$9rlmnK5ew2CfbPoiNY.dyO8iMcR9WZSJaynyiN3m7RmjJiiynEv/u","restaurantType":"restorer","restaurantName":"restorer","restaurantAddress":"restorer","restaurantPhone":"06.12.12.12.12","sponsorCode":"","restorerSponsorCode":"babb181c-72a6-4130-a975-f983ee77564c","__v":0},{"_id":"660fdeabf78d7cadafaabc9b","type":"deliverer","firstname":"deliverer","surname":"DELIVERER","email":"deliverer@deliverer.fr","password":"$2b$10$Bf6DgyZqBytme2e3kydgq.mbhERZkHF3XWFdLCwoWqrGmY8mOkc92","phone":"06.12.12.12.12","sponsorCode":"","delivererSponsorCode":"49c4f9e0-91b3-4d26-8607-2eccbe02f9e8","__v":0},{"_id":"660ff62546b23c5a12294d61","type":"developer","firstname":"developer","surname":"DEVELOPER","email":"developer@developer.fr","password":"$2b$10$rkzGHk6yih.nibTh.yRY5.qu80NBo3cpSL/TANJ8X1Qy.XzFE9cca","phone":"06.12.12.12.12","__v":0},{"_id":"660fe5b684d11aeb2bb3fcdd","type":"marketing","firstname":"marketing","surname":"MARKETING","email":"marketing@marketing.fr","password":"$2b$10$DofxL.ZnnW8C/ASySkZK4O0ljSuOiAt3IQAeSwKBrcCcIuCFh3x6G","phone":"06.12.12.12.12","__v":0},{"_id":"660fdbd6cb546825b69a643f","type":"administrator","firstname":"administrator","surname":"ADMINISTRATOR","email":"administrator@administrator.fr","password":"$2b$10$/uwFsMW3w2alpMsrRYcwm./Io72BVcn0nQjkqjE2FLD7jC0onv5AS","phone":"06.12.12.12.12","__v":0}]
 *          400:
 *              description: Bad request
 */
router.get("/administrators/", authController.readAdministrator)

/**
 * @swagger
 * /1.0/accounts/administrators/{id}:
 *  get:
 *      summury: Get specified administrator from administrator collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Return specified administrator from administrator collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.get("/administrators/:id", authController.readAdministrator)


/**
 * @swagger
 * /1.0/accounts/users/{id}:
 *  patch:
 *      summury: Patch specified user from user collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      example:
 *                          type: user
 *                          firstname: user
 *                          surname: USER
 *                          email: user@user.fr
 *                          password: user
 *                          address: user
 *                          phone: 06.12.12.12.12
 *                          sponsorCode: edb2103b-e3cb-4273-a446-404d742d2528
 *      responses:
 *          200:
 *              description: Return updated user from user collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.patch("/users/:id", authController.updateUser)

/**
 * @swagger
 * /1.0/accounts/restorers/{id}:
 *  patch:
 *      summury: Patch specified restorer from restorer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      example:
 *                          type: restorer
 *                          firstname: restorer
 *                          surname: RESTORER
 *                          email: restorer@restorer.fr
 *                          password: restorer
 *                          address: restorer
 *                          phone: 06.12.12.12.12
 *                          sponsorCode: edb2103b-e3cb-4273-a446-404d742d2528
 *      responses:
 *          200:
 *              description: Return updated restorer from restorer collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.patch("/restorers/:id", authController.updateRestorer)

/**
 * @swagger
 * /1.0/accounts/deliverers/{id}:
 *  patch:
 *      summury: Patch specified deliverer from deliverer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      example:
 *                          type: deliverer
 *                          firstname: deliverer
 *                          surname: DELIVERER
 *                          email: deliverer@deliverer.fr
 *                          password: deliverer
 *                          address: deliverer
 *                          phone: 06.12.12.12.12
 *                          sponsorCode: edb2103b-e3cb-4273-a446-404d742d2528
 *      responses:
 *          200:
 *              description: Return updated deliverer from deliverer collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.patch("/deliverers/:id", authController.updateDeliverer)

/**
 * @swagger
 * /1.0/accounts/developers/{id}:
 *  patch:
 *      summury: Patch specified developer from developer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      example:
 *                          type: developer
 *                          firstname: developer
 *                          surname: DEVELOPER
 *                          email: developer@developer.fr
 *                          password: developer
 *                          address: developer
 *                          phone: 06.12.12.12.12
 *                          sponsorCode: edb2103b-e3cb-4273-a446-404d742d2528
 *      responses:
 *          200:
 *              description: Return updated developer from developer collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.patch("/developers/:id", authController.updateDeveloper)

/**
 * @swagger
 * /1.0/accounts/marketing/{id}:
 *  patch:
 *      summury: Patch specified marketing from marketing collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      example:
 *                          type: marketing
 *                          firstname: marketing
 *                          surname: MARKETING
 *                          email: marketing@marketing.fr
 *                          password: marketing
 *                          address: marketing
 *                          phone: 06.12.12.12.12
 *                          sponsorCode: edb2103b-e3cb-4273-a446-404d742d2528
 *      responses:
 *          200:
 *              description: Return updated marketing from marketing collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.patch("/marketing/:id", authController.updateMarketing)

/**
 * @swagger
 * /1.0/accounts/administrators/{id}:
 *  patch:
 *      summury: Patch specified administrator from administrator collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      example:
 *                          type: administrator
 *                          firstname: administrator
 *                          surname: ADMINISTRATOR
 *                          email: administrator@administrator.fr
 *                          password: administrator
 *                          address: administrator
 *                          phone: 06.12.12.12.12
 *                          sponsorCode: edb2103b-e3cb-4273-a446-404d742d2528
 *      responses:
 *          200:
 *              description: Return updated administrator from administrator collection
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          example: {"_id":"660fb5743330dc816f37795b","type":"user","firstname":"user","surname":"USER","email":"user@user.fr","password":"$2b$10$r5vyVkmNClBKydsihiFhsuO.o.8KwaxDIxSy0t8Lz3pW8Kok457m6","address":"user","phone":"06.12.12.12.12","sponsorCode":"","userSponsorCode":"edb2103b-e3cb-4273-a446-404d742d2527","__v":0}
 *          400:
 *              description: Bad request
 */
router.patch("/adminitrators/:id", authController.updateAdministrator)


/**
 * @swagger
 * /1.0/accounts/users/{id}:
 *  delete:
 *      summury: Delete specified user from user collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: User deleted
 *          400:
 *              description: Bad request
 *          404:
 *              description: Not found
 */
router.delete("/users/:id", authController.deleteUser)

/**
 * @swagger
 * /1.0/accounts/restorers/{id}:
 *  delete:
 *      summury: Delete specified restorer from restorer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Restorer deleted
 *          400:
 *              description: Bad request
 *          404:
 *              description: Not found
 */
router.delete("/restorers/:id", authController.deleteRestorer)

/**
 * @swagger
 * /1.0/accounts/deliverers/{id}:
 *  delete:
 *      summury: Delete specified deliverer from deliverer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Deliverer deleted
 *          400:
 *              description: Bad request
 *          404:
 *              description: Not found
 */
router.delete("/deliverers/:id", authController.deleteDeliverer)

/**
 * @swagger
 * /1.0/accounts/developers/{id}:
 *  delete:
 *      summury: Delete specified developer from developer collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Developer deleted
 *          400:
 *              description: Bad request
 *          404:
 *              description: Not found
 */
router.delete("/developers/:id", authController.deleteDevloper)

/**
 * @swagger
 * /1.0/accounts/marketing/{id}:
 *  delete:
 *      summury: Delete specified marketing from marketing collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Marketing deleted
 *          400:
 *              description: Bad request
 *          404:
 *              description: Not found
 */
router.delete("/marketing/:id", authController.deleteMarketing)

/**
 * @swagger
 * /1.0/accounts/administrators/{id}:
 *  delete:
 *      summury: Delete specified administrator from administrator collection
 *      tags: [Users]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string         
 *            required: true
 *      responses:
 *          200:
 *              description: Administrator deleted
 *          400:
 *              description: Bad request
 *          404:
 *              description: Not found
 */
router.delete("/administrators/:id", authController.deleteAdministrator)

module.exports = router