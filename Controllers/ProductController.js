let Product = require('../Models/Product');

exports.getProducts = async (req,res) => {
    try{
        let Productlist = await Product.find();
        if(!Productlist){
            res.send('No record found');
        }
        res.json(Productlist);
    }catch(err){
        console.log(err);
    }   
}

exports.addProduct = async (req,res) =>{
    try{
        let ProductData = new Product({
            name: req.params.name
        });
        await ProductData.save();
    }catch(err){
        console.log(err);
    }
   

}