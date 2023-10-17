const express= require("express");
const get_route= express();

const bodyParser= require("body-parser");
get_route.use(bodyParser.json());
get_route.use(bodyParser.urlencoded({extended: true}));

const multer= require("multer");
const path= require("path");

get_route.use(express.static('public'));

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/productImages'), function(err, success){

            if(err){
                throw err
            }

        });
    },
    
    filename: function(req, file, cb){

        const name= Date.now()+'-'+file.originalname;
        cb(null, name, function(error, success){

            if(error){
                throw error
            }

        });

    }
});

const upload= multer({storage: storage});

const auth= require("../middleware/auth");

const user_controller= require("../controllers/userController");

// product_route.post('/add-product', upload.array('images', 8), auth, product_controller.addproduct);

get_route.get('/get-data', upload.single('images'), user_controller.product);

module.exports= get_route;