var Model = require('./models/models.js');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db =  "mongodb://dsafanyuk:david1@ds113640.mlab.com:13640/storage-unit";
var router = express.Router();
var app = express();
mongoose.connect(db, function(err, response){
    if(err)
    {
        console.log('Failed to connect to db');
    }
    else{
        console.log('Connected to' + db);
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));
app.use('/', router);


//GET
router.get('/api/users', function(request,response){
    Model.find({}, function(err, users){
        if(err){
            response.status(404).send(err);
        }
        else{
            response.status(200).send(users);
        }
    });
});

//Post
router.post('/api/users', function(request, response){
    var model = new Model();
    model.name = request.body.name;
    model.phone = request.body.phone;
    model.save(request.body, function(err, user){
        if(err){
            response.status(500).send(err);
        }
        else {
            response.status(201).send(user);
        }
    });
});

//Delete
router.delete('/api/users/:id', function(request, response){
    var id = request.params.id;
    console.log(id);
    Model.remove({_id: id}, function(err, res){
        if(err){
            response.status(500).send(err);
        }
        else {
            response.status(200).send({message: 'success on deleting user'});
        }
    });
});






app.listen(3000, function(){
    console.log('Listening on port 3000');
});