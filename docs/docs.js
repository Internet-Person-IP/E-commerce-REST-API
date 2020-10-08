
module.exports = {

    "swagger": "2.0",
    "info": {
      "description": "This is the API's for E Commerce Application. An user has to be created through /users API.After that, the user has to login through /login API. Login API Output has the JWT token. That token has to be updated in Authorize. This logs in the  . After that,the Product/cart/order API can be used ",
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
    "host": "w9hq4ud430.execute-api.eu-north-1.amazonaws.com/dev",
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
        "name": "User",
        "description": "Customers  ",
        "externalDocs": {
          "description": "Find out more about our store",
          "url": "http://swagger.io"
        }
      }
    ],
    "schemes": [
        "https",
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
          ],
          "produces": [
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
            "500": {
              "description": "Unsuccessfull"
            },
            "201": {
              "description": "Successfully added product"
            }

          },
          "security": [
            {
              "Bearer":[]
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
            "application/json"
          ],
          "produces": [
            "application/json"
          ],
          "responses": {
            "500": {
              "description": "Did not retrieve all the products"
            },
            "200": {
              "description": "Successfully retrieved all the products"
            },
          },
          
        }
      },
      
        "/products/{productID}": {
          "put":{ 
            "tags": [
              "Product"
            ],
            "summary": "Update the product requested",
            "description": "",
            "operationId": "UpdateProduct",
            "consumes": [
              "application/json"
            ],
            "produces": [
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
            "security": [
              {
                "Bearer":[]
              }
            ],
             "responses": {
              "500": {
                "description": "Did not update the product requested"
              },
              "201": {
                "description": "Successfully updated  the product"
              },
            },
            
          }, 
          "get":{ 
            "tags": [
              "Product"
            ],
            "summary": "Retreive the product requested",
            "description": "",
            "operationId": "GetProduct",
            "consumes": [
              "application/json"
            ],
            "produces": [
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
                "description": "Did not find the product requested"
              },
              "200": {
                "description": "Successfully retrieved  the product"
              },
              "500": {
                "description": "Error retrieving the product"
              },
            },
          },
          "delete":{ 
            "tags": [
              "Product"
            ],
            "summary": "Delete the product requested",
            "description": "",
            "operationId": "DeleteProduct",
            "consumes": [
              "application/json"
            ],
            "produces": [
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
            "security": [
              {
                "Bearer":[]
              }
            ],
            "responses": {
              "500": {
                "description": "Did not delete the product requested"
              },
              "404": {
                "description": "Product  not found"
              },
              "200": {
                "description": "Successfully deleted  the product"
              },
            },
            
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
          "security": [
            {
              "Bearer":[]
            }
          ],
           "responses": {
            "201": {
              "description": "Successfully added cart",
              },
            "500": {
              "description": "Unsuccessfull retrieval"
            }
          },
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
          "security": [
            {
              "Bearer":[]
            }
          ],
          "responses": {
            "200": {
              "description": "Cart Record fetched",
            },
            "500": {
              "description": "Unsuccessful retrieval"
            },
           },
         
        },
        "put": {
          "tags": [
            "Cart"
          ],
          "summary": "Update Quantity items in the cart",
          "description": "",
          "operationId": "UpdateCart",
          "produces": [
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
          "security": [
            {
              "Bearer":[]
            }
          ],
          "responses": {
            "500": {
              "description": "Updation Unsuccessfull"
            },
            "200": {
              "description": "Successfully updated cart"
            }
          },
               },
        "delete": {
          "tags": [
            "Cart"
          ],
          "summary": "Deletes items in the cart",
          "description": "",
          "operationId": "deleteCart",
          "produces": [
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
          "security": [
            {
              "Bearer":[]
            }
          ],
          "responses": {
            "500": {
              "description": "Deletion Unsuccessfull"
            },
            "200": {
              "description": "Successfull deletion"
            }
          },
        
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
          "security": [
            {
              "Bearer":[]
            }
          ],
            "responses": {
            "200": {
              "description": "Successful operation",
              },
            "404": { 
              "description" : "Orders cannot be retreived "
            },
          },
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
          "security": [
            {
              "Bearer":[]
            }
          ],
          "responses": {
            "201": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Order"
              }
            },
            "500": {
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
            "application/json"
          ],
          "parameters": [
            {
              "name": "orderID",
              "in": "path",
              "description": "ID of order that needs to be fetched",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "security": [
            {
              "Bearer":[]
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Order"
              }
            },
            "404": {
              "description": "Unsuccessfull retrieval"
            }
          }
        }
      },
      "/login": {
        "post": {
          "tags": [
            "Login"
          ],
          "summary": "Logs user into the system",
          "description": "",
          "operationId": "loginUser",
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Login",
              "required": true,
              "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "string"
            
          },
          "password": {
            "type": "string",
            "format": "string",
           },
        },
      }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "type": "string"
              },
              
            },
            "400": {
              "description": "Invalid username/password supplied"
            }
          }
        }
      },
      "/users": {
        "post": {
          "tags": [
            "User"
          ],
          "summary": "Create user",
          "description": "Creating a new login for a user.",
          "operationId": "createUser",
          "produces": [
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
            "201": {
              "description": "Successfully created user"
            },
            "400": { 
              "description" : "Did not create a user"
            }
          }
        }
      },
    },
    "securityDefinitions": {
      "Bearer": {
        "type": "apiKey",
        "name": "token",
        "in"  : "header"
      },
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
        }
      },
      "CartDelete": { 
        "type":"object",
        "properties": { 
          "productID": {
            "type":"integer",
            "format":"integer"
          }
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
        }
      },
      "User": {
        "type": "object",
        "properties": {
          
          "name": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string",
            "example": "doggie"
          },
          "address": {
            "type": "string"
          }
        }
      },
      "Order": {
        "type": "object",
         "properties": {
          "userID": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
   },
    "externalDocs": {
      "description": "Find out more about Swagger",
      "url": "http://swagger.io"
    }
  }
  