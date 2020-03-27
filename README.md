# E-commerce REST API

  
  

## Abstract

  

## Chapters

### 1. [Introduction](#introduction)

### 2. [Background and Complications](#purpose)

### 3. [Technology Stack](#technology-stack)

### 4. [Code](#code)

### 5. [Application Flow](#application-flow)

### 6. [Future](#future)

  

## 1. Introduction

In this project a REST API was created for an E-commerce Appliction. The main models in this project are User, Product, Cart and Order. The Users can view all products, create Products and delete Products they have created. Users are able to Add to their Cart, Delete from their cart and also update quantity of a product in their cart. Once a Purchase is complete an Order is created.

  

The application aslo uses swagger documentation which can be found at this link:

  

The Swagger Documentation shows the different endpoints of the application and they can be used.

## 2. Purpose

The purpose of the project was to learn and get a basic understanding of SQL and some of the basic Termonology and theory. When doing research most people seem to suggest creating a basic E-commerce platform is quite educational on the theory of SQL. The idea of creating a REST API is for a simple way to apply the SQL knowledge but the main focus was on learning SQL and trying to implement a E-commerce Database.

## 3. Technology Stack

The stack consist of a couple of aspects:

1. Backend Code - the backend was written in Node.js using Express.js. Express was used since it is a simple framework for creating REST APIs with minimal restriction and guidelines which made the development quite simple and fast. A form of the MVC pattern was applied. 
 
3. Database - MySQL was used as a database since the main focus was learn SQL and develop a E-commerce REST API. MySQL was used since in an E-commerce store there is quite a lot of relations.

4. Swagger - Swagger was used as a simple way to display the API. This it quite easy to display and explain all the endpoints in a simple webapplication.

5. Hosting - The hosting platform that was used in Heroku. The main reason is that it is quite Cheap and hosting was really easy to setup.

## 4. Database - Tables and Relations
![Database Design Image] (SQLDiagram.png)
       SQL table design and relations are as follows.  The user signs up and logs in to the application. The  user details are stored in USER table and authentication and authorization is performed on the user.
 There are different products which can be queried from the PRODUCT table. The user selects different products to buy. The CART table is updated with the products to be bought along with the quantity of the products. When the user deciides to buy the products in cart and checks out his products, the ORDER table and the ORDERITEM Tables are inserted for the order and the CART table is deleted for the user.


## 5. Future

    Plan to implement  Search function and pagination.