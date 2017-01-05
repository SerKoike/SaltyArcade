var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res,next) {
  res.render('index', { title: 'Express' });   
});

/* GET login page. */
router.route("/login").get(function(req,res){   
    res.render("login",{title:'User Login'});
}).post(function(req,res){                      
    //get User info
    
    var User = global.dbHandel.getModel('user');  
    var uname = req.body.uname;                
    User.findOne({name:uname},function(err,doc){   
        if(err){                                         
            res.send(500);
            console.log(err);
        }else if(!doc){                                 
            req.session.error = 'nom nexist pas';
            res.send(404);                           
        //    res.redirect("/login");
        }else{ 
            if(req.body.upwd != doc.password){    
                req.session.error = "mot de passe error";
                res.send(404);
            //    res.redirect("/login");
            }else{                                     
                req.session.user = doc;
                res.send(200);
            //    res.redirect("/home");
            }
        }
    });
});

/* GET register page. */
router.route("/register").get(function(req,res){    
    res.render("register",{title:'User register'});
}).post(function(req,res){ 
     
    var User = global.dbHandel.getModel('user');
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    User.findOne({name: uname},function(err,doc){   
        if(err){ 
            res.send(500);
            req.session.error =  'Internet Error！';
            console.log(err);
        }else if(doc){ 
            req.session.error = 'Nom exist！';
            res.send(500);
        }else{ 
            User.create({                             
                name: uname,
                password: upwd
            },function(err,doc){ 
                 if (err) {
                        res.send(500);
                        console.log(err);
                    } else {
                        req.session.error = 'creer sucessful！';
                        res.send(200);
                    }
                  });
        }
    });
});

/* GET home page. */
router.get("/home",function(req,res){ 
    if(!req.session.user){                     
        req.session.error = "connexion d'abord"
        res.redirect("/login");                
    }
    res.render("home",{title:'Home'});       
});

router.get("/digger",function(req,res){ 
    if(!req.session.user){                     
        req.session.error = "connexion d'abord"
        res.redirect("/login");                
    }
    res.render("digger",{title:'Digger'});       
});
router.get("/oregontrails",function(req,res){ 
    if(!req.session.user){                     
        req.session.error = "connexion d'abord"
        res.redirect("/login");                
    }
    res.render("oregontrails",{title:'Oregontrails'});       
});
router.get("/spaceinvader",function(req,res){ 
    if(!req.session.user){                     
        req.session.error = "connexion d'abord"
        res.redirect("/login");                
    }
    res.render("spaceinvader",{title:'Spaceinvader'});       
});
router.get("/wolfenstein",function(req,res){ 
    if(!req.session.user){                     
        req.session.error = "connexion d'abord"
        res.redirect("/login");                
    }
    res.render("wolfenstein",{title:'Wolfenstein'});       
});


/* GET logout page. */
router.get("/logout",function(req,res){    
    req.session.user = null;
    req.session.error = null;
    res.redirect("/");
});


module.exports = router;
