const express = require('express');
const app = express();
app.use(express.urlencoded());

const Todo = require('../models/todo');

module.exports.home = function(req, res){

    return res.render('home', {
                'title' : 'TODO List'
            });
    

}


module.exports.create_todo = function(req, res){

    Todo.create({
        description: req.body.description,
        category: req.body.category,
        due_date: req.body.due_date
    }, function(err, newTodo){
        if(err){
            console.log('Error in creating new todo');
            return;
        }

        console.log(`************ ${newTodo}`);
        return res.redirect('back');
    });

}