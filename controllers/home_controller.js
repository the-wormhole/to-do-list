//const express = require('express');
const db = require('../config/mongoose');
const task = require('../models/to-do');


module.exports.home = function(req,res){

    task.find({}, function(err, tasks){
        if(err){
            console.log('Error in fetching list from db ........');
            return;
        }
        return res.render('home',{
            title: "TO-DO list App",
            to_do_list: tasks
        });

    });
    
}

module.exports.create_t = function(req,res){

    //const app = express();
   // app.use(express.urlencoded());
    task.create({
        task: req.body.Task,
        category: req.body.category,
        Due_Date: req.body.duedate,
        Completed: false
    },function(err, newTask){
        if(err){
            console.log('Error in creating the task!');
            return;
        }
        console.log('******',newTask);
        return res.redirect('back');
    });

   // return res.redirect('home')
    
}


module.exports.delete_t = function(req,res){
    //getting id
    let id = req.query.id;

    task.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error in deleting tasks from database****');
            return;
        }

        return res.redirect('back');
    })

}