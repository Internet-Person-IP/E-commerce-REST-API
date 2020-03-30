const AccessControl = require("accesscontrol");
const ac = new AccessControl();

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