
var http = require("http");
var Developer = require("./Developer");
var eventConfig = require("./config")

//Creating new Developer-1
var developerOne = new Developer("Yossi", "NodeJs",8500);
developerOne.on(eventConfig.ManageLikes,developerOne.Informetion);
//Creating new Developer-2
var developerTwo = new Developer("Ron", "java",5500);
developerTwo.on(eventConfig.ManageLikes,developerTwo.Informetion);

//Actions
developerOne.like();
developerOne.like();
developerOne.disLike();
developerOne.like();
developerTwo.like();
developerOne.like();
developerTwo.like();
developerTwo.disLike();
developerOne.like();
developerTwo.disLike();
developerTwo.disLike();
developerOne.promotion();
developerOne.promotion();
developerOne.promotion();
developerOne.promotion();
developerOne.promotion();

//Server
http.createServer(function(request, response){
    var msg = developerOne.printString() + "\n\n ************************ Log file ************************ \n\n\n" + developerOne.getLog();
    response.writeHeader(200 , {'content-Type': 'text/plain'});
    response.write(msg);
    response.end();
}).listen(8080);
