'use strict'
var EventEmitter = require("events");
var eventConfig = require("../config");
var moment = require('moment');

//global variable
var log = "";

module.exports = class Developer extends EventEmitter {
    
    constructor(developerName,developerLang,baseSalary){
        super();
        this.name = developerName;
        this.lang = developerLang;
        this.likes = 0;
        this.promot  = 0;
        this.salary = baseSalary; 
    }
    
    like(){
        this.likes++;
        this.emit(eventConfig.ManageLikes);
    }
    
    unlike(){
        this.likes--;
        if(this.likes < 0)this.likes = 0;
        this.emit(eventConfig.ManageLikes);
    }
    
    
    //If developer gets more then 5 promotion he will get a raise
    promotion(){
        this.promot++;
        if(this.promot >= 5){
            this.promot = 1; 
            this.salary+=500; 
        }
    }
    
    getMessage(){
        var message = "Developer name: " + this.name + "\n" + "Programing language: " + this.lang + "\n" + "Liks:" + this.likes + "\n" + "Prometion status: " + this.promot + "\n" + "Salary: " + this.salary;
        return message;
    }
    getLog(){
        return log;
    }
    
    displayInformetion() {
        var details = "Developer name: " + this.name + "\n" + "Programing language: " + this.lang + "\n" + "Liks:" + this.likes + "\n" + "Prometion status: " + this.promot + "\n";
        var time = moment().format("YYYY-MM-DD HH:mm");
        log += details + time + "\n\n";
        console.log(details); 
    }
}


