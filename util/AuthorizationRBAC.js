const AccessControl = require("accesscontrol");
const ac = new AccessControl();


/*
This is my simple authorization system it is a role based authorization system
with attributes which help with controlling who has access to what resources.
This helps with the Authorization aspect of the application.

You can read more https://www.npmjs.com/package/accesscontrol

*/


exports.Authorize = (function(){
    ac.grant('Customer')
    .createOwn('Product')
    .updateOwn('Product')
    .deleteOwn('Product')
    .readOwn('CartItem')
    .createOwn('CartItem')
    .updateOwn('CartItem')
    .deleteOwn('CartItem')
    .createOwn('Order')
    .readOwn('Order');

    ac.grant('Admin')
    .createAny('Product')
    .updateAny('Product')
    .deleteAny('Product')
    .readAny('CartItem')
    .createAny('CartItem')
    .updateAny('CartItem')
    .deleteAny('CartItem')
    .createAny('Order')
    .readAny('Order')
    .deleteAny('Order')
    .updateAny('Order');
    return ac;
})();