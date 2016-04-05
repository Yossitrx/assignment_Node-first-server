'use strict'
var EventEmitter = require("events");
var eventConfig = require("../config");
var moment = require('moment');

//global variable
var logFile = "";

module.exports = class Developer extends EventEmitter {
    //c'tor
    constructor(developerName,developerLang,baseSalary){
        super();
        this.devName = developerName;
        this.lang = developerLang;
        this.rate = 0;
        this.promot  = 0;
        this.salary = baseSalary; 
    }
    //returning the log file
    getLog(){
        return logFile;
    }
    //rate rating goes up
    like(){
        this.rate++;
        this.emit(eventConfig.Managerate);
    }
    //rate rating goes done (rate = 0)
    disLike(){
        this.rate--;
        if(this.rate < 0){
            this.rate = 0;
        }
        this.emit(eventConfig.Managerate);
    }

    //If developer gets more then 5 promotion he will get a raise
    promotion(){
        this.promot++;
        if(this.promot >= 5){
            this.promot = 1; 
            this.salary+=500; 
        }
        this.emit(eventConfig.Managerate);
    }
    //toString method
    printString(){
        var message = "Developer name: " + this.devName + "\n" + "Programing language: " + this.lang + "\n" + "Liks:" + this.rate + "\n" + "Prometion status: " + this.promot + "\n" + "Salary: " + this.salary;
        return message;
    }

    Informetion() {
        var info = "Developer name: " + this.devName + "\n" + "Programing language: " + this.lang + "\n" + "Liks:" + this.rate + "\n" + "Prometion status: " + this.promot + "\n";
        var time = moment().format("YYYY-MM-DD HH:mm");
        logFile += info + time + "\n\n";
        //print to the terminal
        console.log(logFile);
    }
}


