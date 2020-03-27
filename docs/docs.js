
module.exports = {

    "swagger": "2.0",
    "info": {
      "description": "This is the API's for E Commerce Application.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.",
      "version": "1.0.0",
      "title": "Swagger E-Commerce Application",
      "termsOfService": "http://swagger.io/terms/",
      "contact": {
        "email": "apiteam@swagger.io"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    "host": "localhost:5000",
    "basePath": "/",
    "tags": [
      {
        "name": "E Commerce Application",
        "description": "APIs for E Commerce",
        "externalDocs": {
          "description": "Find out more",
          "url": "http://swagger.io"
        }
      },
      {
        "name": "Product",
        "description": "Access to different Products"
      },
      {
        "name": "Cart",
        "description": "Carts for an customer ",
        "externalDocs": {
          "description": "Find out more about our store",
          "url": "http://swagger.io"
        }
      },
      {
        "name": "Order",
        "description": "Orders  for different products by customers ",
        "externalDocs": {
          "description": "Find out more about our store",
          "url": "http://swagger.io"
        }
      }, 
      {
        "name": "user",
        "description": "Customers  ",
        "externalDocs": {
          "description": "Find out more about our store",
          "url": "http://swagger.io"
        }
      }
    ],
    "schemes": [
        "http"
    ],
    "paths": {
      "/products": {
        "post": {
          "tags": [
            "Product"
          ],
          "summary": "Add a new product to the store",
          "description": "",
          "operationId": "addProduct",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Product object that needs to be added to the store",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Product"
              }
            }
          ],
          "responses": {
            "401": {
              "description": "Unsuccessfull"
            },
            "200": {
              "description": "Successfully added product"
            }

          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        },
      },
        "/products/getall": { 
        "get":{ 
          "tags": [
            "Product"
          ],
          "summary": "Get all the products",
          "description": "",
          "operationId": "GetProduct",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "responses": {
            "401": {
              "description": "Did not retrieve all the products"
            },
            "200": {
              "description": "Successfully retrieved all the products"
            },
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      },
        "/products/{productID}": { 
          "get":{ 
            "tags": [
              "Product"
            ],
            "summary": "Retreive the product requested",
            "description": "",
            "operationId": "GetProduct",
            "consumes": [
              "application/json",
              "application/xml"
            ],
            "produces": [
              "application/xml",
              "application/json"
            ],
            "parameters": [
              {
                "name": "productID",
                "in": "path",
                "description": "The Product that needs to be fetched",
                "required": true,
                "type": "integer",
                "format": "int64"
              }
            ],
            "responses": {
              "404": {
                "description": "Did not retrieve  the product requested"
              },
              "200": {
                "description": "Successfully retrieved  the product"
              },
            },
            "security": [
              {
                "petstore_auth": [
                  "write:pets",
                  "read:pets"
                ]
              }
            ]
          },
          "put":{ 
            "tags": [
              "Product"
            ],
            "summary": "Update the product requested",
            "description": "",
            "operationId": "UpdateProduct",
            "consumes": [
              "application/json",
              "application/xml"
            ],
            "produces": [
              "application/xml",
              "application/json"
            ],
            "parameters": [
              {
                "name": "productID",
                "in": "path",
                "description": "The Product that needs to be updated",
                "required": true,
                "type": "integer"
              },
              {
                "in": "body",
                "name": "body",
                "description": "Product object that needs to be updated to the store",
                "required": true,
                "schema": {
                  "$ref": "#/definitions/Product"
                }
              }
            ],
            "responses": {
              "404": {
                "description": "Did not retrieve  the product requested"
              },
              "200": {
                "description": "Successfully retrieved  the product"
              },
            },
            "security": [
              {
                "petstore_auth": [
                  "write:pets",
                  "read:pets"
                ]
                          }
            ]
          },
          "delete":{ 
            "tags": [
              "Product"
            ],
            "summary": "Delete the product requested",
            "description": "",
            "operationId": "DeleteProduct",
            "consumes": [
              "application/json",
              "application/xml"
            ],
            "produces": [
              "application/xml",
              "application/json"
            ],
            "parameters": [
              {
                "name": "productID",
                "in": "path",
                "description": "The Product that needs to be fetched",
                "required": true,
                "type": "integer",
                "format": "int64"
              }
            ],
            "responses": {
              "404": {
                "description": "Did not delete the product requested"
              },
              "200": {
                "description": "Successfully deleted  the product"
              },
            },
            "security": [
              {
                "petstore_auth": [
                  "write:pets",
                  "read:pets"
                ]
              }
            ]
          },
          
      },
      "/carts/": {
        "post": {
          "tags": [
            "Cart"
          ],
          "summary": "Carts of customer",
          "description": "Multiple status values can be provided with comma separated strings",
          "operationId": "Create a new cart item",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Product object that needs to be added to the store",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Cart"
              }
            }
          ],
           "responses": {
            "200": {
              "description": "successful operation",
              },
            "400": {
              "description": "Unsuccessfull retrieval"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      },
      
      "/carts/{userID}": {
        "get": {
          "tags": [
            "Cart"
          ],
          "summary": "Find the cart of an User",
          "description": "Returns the cart items for the user",
          "operationId": "getCartById",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "userID",
              "in": "path",
              "description": "ID of User ",
              "required": true,
              "type": "integer",
              "format": "integer"
            }
          ],
          "responses": {
            "200": {
              "description": "Cart Record fetched",
            },
            "400": {
              "description": "Unsuccessful retrieval"
            },
           },
          "security": [
            {
              "api_key": []
            }
          ]
        },
        "put": {
          "tags": [
            "Cart"
          ],
          "summary": "Update Quantity items in the cart",
          "description": "",
          "operationId": "UpdateCart",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "userID",
              "in": "path",
              "description": "User id whose cart to be updated",
              "required": true,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "body",
              "in": "body",
              "description": "Product id whose cart to be updated",
              "required": true,
              "schema": {
                "$ref": "#/definitions/CartUpdate"
              }
 
            }
          ],
          "responses": {
            "400": {
              "description": "Updation Unsuccessfull"
            },
            "200": {
              "description": "Successfully updated cart"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        },
        "delete": {
          "tags": [
            "Cart"
          ],
          "summary": "Deletes items in the cart",
          "description": "",
          "operationId": "deleteCart",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "userID",
              "in": "path",
              "description": "User id whose cart to be deleted",
              "required": true,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "body",
              "in": "body",
              "description": "Product id whose cart to be deleted",
              "required": true,
              "schema": {
                "$ref": "#/definitions/CartDelete"
              }
             
            }
          ],
          "responses": {
            "400": {
              "description": "Deletion Unsuccessfull"
            },
            "200": {
              "description": "Successfull deletion"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      },
      "/orders/getall/{userID}": {
        "get": {
          "tags": [
            "Order"
          ],
          "summary": "Returns Orders of Products",
          "description": "Returns different orders",
          "operationId": "getInventory",
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "userID",
              "in": "path",
              "description": " UserID All orders of that customer to be fetched",
              "required": true,
              "type": "integer",
              "maximum": 2,
              "minimum": 1,
              "format": "int64"
            }
          ],
            "responses": {
            "200": {
              "description": "successful operation",
              }
          },
          "security": [
            {
              "api_key": []
            }
          ]
        }
      },
      "/orders": {
        "post": {
          "tags": [
            "Order"
          ],
          "summary": "Place an order for products",
          "description": "",
          "operationId": "placeOrder",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "order placed for product",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Order"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Order"
              }
            },
            "400": {
              "description": "Invalid Order"
            }
          }
        }
      },
      "/orders/{orderID}": {
        "get": {
          "tags": [
            "Order"
          ],
          "summary": "Find purchase order by ID",
          "description": "For valid response try integer IDs with value=1.         Other values will generated exceptions",
          "operationId": "getOrderById",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "orderID",
              "in": "path",
              "description": "ID of order that needs to be fetched",
              "required": true,
              "type": "integer",
              "maximum": 2,
              "minimum": 1,
              "format": "int64"
            }
          ],
          "responses": {
            "201": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Order"
              }
            },
            "401": {
              "description": "Unsuccessfull retrieval"
            }
          }
        }
      },
      "/user": {
        "post": {
          "tags": [
            "user"
          ],
          "summary": "Create user",
          "description": "This can only be done by the logged in user.",
          "operationId": "createUser",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Created user object",
              "required": true,
              "schema": {
                "$ref": "#/definitions/User"
              }
            }
          ],
          "responses": {
            "default": {
              "description": "successful operation"
            }
          }
        }
      },
      "/user/login": {
        "get": {
          "tags": [
            "user"
          ],
          "summary": "Logs user into the system",
          "description": "",
          "operationId": "loginUser",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "username",
              "in": "query",
              "description": "The user name for login",
              "required": true,
              "type": "string"
            },
            {
              "name": "password",
              "in": "query",
              "description": "The password for login in clear text",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "type": "string"
              },
              "headers": {
                "X-Rate-Limit": {
                  "type": "integer",
                  "format": "int32",
                  "description": "calls per hour allowed by the user"
                },
                "X-Expires-After": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date in UTC when token expires"
                }
              }
            },
            "400": {
              "description": "Invalid username/password supplied"
            }
          }
        }
      },
      "/user/logout": {
        "get": {
          "tags": [
            "user"
          ],
          "summary": "Logs out current logged in user session",
          "description": "",
          "operationId": "logoutUser",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [],
          "responses": {
            "default": {
              "description": "successful operation"
            }
          }
        }
      },
      "/user/{username}": {
        "get": {
          "tags": [
            "user"
          ],
          "summary": "Get user by user name",
          "description": "",
          "operationId": "getUserByName",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "username",
              "in": "path",
              "description": "The name that needs to be fetched. Use user1 for testing. ",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/User"
              }
            },
            "400": {
              "description": "Invalid username supplied"
            },
            "404": {
              "description": "User not found"
            }
          }
        },
        "put": {
          "tags": [
            "user"
          ],
          "summary": "Updated user",
          "description": "This can only be done by the logged in user.",
          "operationId": "updateUser",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "username",
              "in": "path",
              "description": "name that need to be updated",
              "required": true,
              "type": "string"
            },
            {
              "in": "body",
              "name": "body",
              "description": "Updated user object",
              "required": true,
              "schema": {
                "$ref": "#/definitions/User"
              }
            }
          ],
          "responses": {
            "400": {
              "description": "Invalid user supplied"
            },
            "404": {
              "description": "User not found"
            }
          }
        },
        "delete": {
          "tags": [
            "user"
          ],
          "summary": "Delete user",
          "description": "This can only be done by the logged in user.",
          "operationId": "deleteUser",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "username",
              "in": "path",
              "description": "The name that needs to be deleted",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "400": {
              "description": "Invalid username supplied"
            },
            "404": {
              "description": "User not found"
            }
          }
        }
      }
    },
    "securityDefinitions": {
      "petstore_auth": {
        "type": "oauth2",
        "authorizationUrl": "http://petstore.swagger.io/oauth/dialog",
        "flow": "implicit",
        "scopes": {
          "write:pets": "modify pets in your account",
          "read:pets": "read your pets"
        }
      },
      "api_key": {
        "type": "apiKey",
        "name": "api_key",
        "in": "header"
      }
    },
    "definitions": {
      "Product": {
        "type": "object",
        "properties": {
          "ProductName": {
            "type": "string",
            "format": "string",
            "example":"MicroPhone"
          },
          "PictureURL": {
            "type": "string",
            "format": "string",
            "example":"microphoneurl.com"
          },
          "Description": {
            "type": "string",
            "format": "string",
            "example" : "Good Microphone"
          },
          "CreatorID": {
            "type": "integer",
            "format": "integer",
            "example": 1
          },
          "Price": {
            "type": "integer",
            "format": "integer",
            "example": 20
          }
        },
        "xml": {
          "name": "Product"
        }
      },
      "Cart": {
        "type": "object",
        "properties": {
          "userID": {
            "type": "integer",
            "format": "integer"
          },
          "productID": {
            "type": "integer",
            "format":"integer"
          },
          "Quantity": {
            "type": "integer",
            "format":"integer"
          }
        },
        "xml": {
          "name": "Cart"
        }
      },
      "CartDelete": { 
        "type":"object",
        "properties": { 
          "productID": {
            "type":"integer",
            "format":"integer"
          }
        },
        "xml": {
          "name": "Cart Delete "
        }
      },
      "CartUpdate": {
        "type": "object",
        "properties": {
          "Quantity": {
            "type": "integer",
            "format":"integer"
          },
          "productID": {
            "type": "integer",
            "format":"integer"
          }
        },
        "xml": {
          "name": "CartUpdate"
        }
      },
      "User": {
        "type": "object",
        "properties": {
          
          "Name": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string",
            "example": "doggie"
          },
          "Address": {
            "type": "string"
          }
        },
        "xml": {
          "name": "User"
        }
      },
      "Order": {
        "type": "object",
         "properties": {
          "userID": {
            "type": "integer",
            "format": "int64"
          }
        },
        "xml": {
          "name": "Order"
        }
      },
      "ApiResponse": {
        "type": "object",
        "properties": {
          "code": {
            "type": "integer",
            "format": "int32"
          },
          "type": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        }
      }
    },
    "externalDocs": {
      "description": "Find out more about Swagger",
      "url": "http://swagger.io"
    }
  }
  