const user= require("../models/productModel");

const product= async(req, res) =>{

    try{  

        // var arrimages= [];
        // for(let i=0; i<req.files.length; i++){

        //     arrimages[i]= req.files[i].filename;

        // }

        const getdata= new user({
             title: req.body.title,
             description: req.body.description,
             price: req.body.price,
             //images: arrimages
             image: req.file.filename,
        });
        const product_data= await getdata.save();

        res.status(200).send({success: true, msg: "product Details", data: product_data})

    }

    catch (error) {
        res.status(400).send({success: false, msg: error.message});
    }
}



module.exports={
    product
    
}