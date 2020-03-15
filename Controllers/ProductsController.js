let products =[{id:1,name:"Chicken Biscuit"},{ id:2,name:"Kebab"}];

exports.getAllProducts =(req,res) =>{
    res.status(200).json(products);
}

exports.getProduct = (req,res) =>{
    res.status(200).json(products[req.params.id]);
}

exports.createProduct = (req,res) => {
    const newFood={
        id: req.body.id,
        name: req.body.name
    }
    products=[...products,newFood];

    res.json(products);

}

