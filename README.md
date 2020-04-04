
  

# E-commerce REST API

  
## Disclaimer
  
The project should include a file called serverless.env.json which is for enviroment variables but since we cannot display it on github for security reason that file has been hidden. To be clear it is just a normal json file with some env variables.
  

## Abstract

This project is a Ecommerce REST API that works similarly to craigslist and ebay where users can create their own products. The reason for creating this project was to learn SQL and some of the theory behind the application. The code is commented in section where it might be unclear what is going on. The project aslo has some clear documentation in the form of swagger documentation which can be found here:

  

[https://f7isneh248.execute-api.eu-north-1.amazonaws.com/dev/api-docs/](https://f7isneh248.execute-api.eu-north-1.amazonaws.com/dev/api-docs/)

  

The most important Technologies used where Express to design the endpoints and MySQL as a database. The hosting was on AWS using AWS Lambda as way to reduce the cost by making it serverless. There are quite some improvments possible in this application such as Payment, Filtering and product categories but due to time constrainst these requirements where ignored.

  

## Chapters

  

  

### 1. [Introduction](#1-introduction-1)

  

### 2. [Purpose](#2-purpose-1)

  

### 3. [Technology Stack](#3-technology-stack-1)

  

### 4. [Database - Tables and Relations](#4-database---tables-and-relations-1)

  

### 5. [Improvements](#5-improvements-1)

  

### 6. [Future](#6-future-1)

  

  

  

## 1. Introduction

  

In this project a REST API was created for an E-commerce Appliction. The project used an MVC like pattern to structure the code. The code should be commented to make it somewhat more clear.

  

The main models in this project are User, Product, Cart and Order. The Users can view all products, create Products and delete Products they have created. Users are able to Add to their Cart, Delete from their cart and also update quantity of a product in their cart. Once a Purchase is complete an Order is created.

  

Argubly this API is similar to Ebay since user can create products.

  

The application aslo uses swagger documentation which can be found at this link:

  

[https://f7isneh248.execute-api.eu-north-1.amazonaws.com/dev/api-docs/](https://f7isneh248.execute-api.eu-north-1.amazonaws.com/dev/api-docs/)

  

The Swagger Documentation shows the different endpoints of the application and they can be used.

  

## 2. Purpose

  
  

The purpose of the project was to learn and get a decent understanding of SQL and some of the terminology and theory. When doing research most people seem to suggest creating a basic E-commerce platform is quite educational on the theory of SQL. The idea of creating a REST API is a simple way to apply the SQL knowledge but the main focus was on learning SQL and trying to implement a E-commerce Database.

  

  

## 3. Technology Stack

  

The stack consist of a couple of aspects:

the backend was written in Node.js using Express.js. Express was used since it is a simple framework for creating REST APIs with minimal restriction and guidelines which made the development quite simple and fast. A form of the MVC pattern was applied.

  

1. [Node.js](https://nodejs.org/en/) - Node was used for the backend since both creators of the project where familiar with Javascript. Also since the main focus was on SQL having a more sophisticated language like Java.

  

2. [Express.js](https://expressjs.com/) - Express was used since it made the development of the API quite streamline and there was alot of Information of Express.

  

3. [AWS Lambda using Serverless HTTP](https://www.npmjs.com/package/serverless-http) - AWS Lambda was used as a cheap way to host this infrastucture. AWS Lambda is free for the first million request made which made the backend infrastucture free. Using the Serverless HTTP module found in NPM we were able to fully convert the Express backend to a single lambda function. This however can possibly have issues with performance, so in production I would not recommend this approach.

  

4. [Serverless Framework](https://serverless.com/) - The serverless framwork was used since deployment is quite simple. You setup an IAM user and setup the serverless.yaml file and type sls deploy in the console. The framwork spits out an endpoint and there you have your entire infrastucture.

  

5. [Database](https://www.mysql.com/) - MySQL was used as a database since the main focus was learn SQL and develop a E-commerce REST API. MySQL was used since in an E-commerce store there is quite a lot of relations.

  

6. [JWT](https://jwt.io/) - This was used as a way to authenticate User for this application. It also helped with Authorization since I was able to assign roles to people.

  

7. **Authorization** - Some basic Authorization was used so that only people that created a resource was able to access that resource. The Authorization used Role Based Authorization where it is currently possible to have 2 roles, one is customer and one is admin. However only a DB Admin can assign a role of admin to a user. We do not want people to be able create their admin profiles and then do whatever they want in the application.

  

8. [Swagger](https://swagger.io/) - Swagger was used as a simple way to display the API. This it quite easy to display and explain all the endpoints in a simple webapplication.

  

9. [Hosting](https://aws.amazon.com/) - The hosting platform that was used in AWS. The free tier was quite generous and it was easy to convert an express api to a single lambda function.

  

  

## 4. Database - Tables and Relations

This is the overall stucture of the Database.

  

![Image](/SQLDiagram.png)

There are 5 main tables we will discuss the purpose the tables and then the relations between these tables.

 * User - The User table contains most of the information on the user. The Id in this table is used as a Primary Key to identify Unique Rows. 
 * Product - The Products table contains information on the product. The product also has a Foreign Key called creatorID which is the Id of User table. The relation between User and Product is a one to many since one User can have many Products.
 * Cart - The Cart table contains information of the cart of the user. Each user can only have 1 cart. The relationship  Cart Table works as a Join Table between the Users and the Products. There is also an additional field which indicates quantity of said product. In this there are 2 Foreign Keys which are userID and ProductID.
 * Orders - The Orders table contains information about an order. Each order has a Foreign Key called userId which is the Id of User table.
 * OrderItem - The OrderItem table contains information about different products in each Order. It works as a join table between Orders and Product, since Many Orders can have Many Products this is a Many to Many relationship.  In this there are 2 Foreign Keys which are orderID and ProductID.

  

## 5. Improvements

So there is quite alot to improve in this application. Here are some possible improvments to the application.

  

* Payment - Currently there is no way to charge people for products they purchase. The simplest way to fix this issue is by implementing the stripe API.

  

* Better Authorization - The Authorization is quite simple and can be quite difficult to exapand. In the future authorization should be done by having a TABLE of rows where each role has a certain JSON object stored as a string. These JSON objects will work as policies, and makes it easier to check if a user has certain privileges.

  

* Categories - Making it so that each product can have its own category is an idea that can make the api more interesting. Since you are able to use filtering or something similar.

  

* Stores - There should be a possible way to differentiate between Users and Stores. This makes the API more similar to ebay where both regular user can create products but also buissnesses.

  

* Filters - Filtering is something that would be quite interesting to implement in a REST API but for the moment I wanted to be able to complete this project in a short time and I felt as if having filtering was overkill.

  

* Pagination - In most e-commerce application pagination is something that is going to be neccesary. Since you do not want to display entire tables with thousands of rows. It makes more sense to have pages of for example 10-25 products. If the user wants to see more they can click on the next page.

  

## 6. Future

  

Currently there is no future for this project. It was more of a way to explore SQL more that actually creating a good API. Hope this was a fun read.