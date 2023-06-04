// Директива use strict
'use strict';
const mongoose = require("mongoose");
const express = require("express");
// Подключаем модуль body-parser.
const bodyParser = require("body-parser");
// jsonParser превращает строку текста JSON в объект Javascript
const jsonParser = bodyParser.json();
// Импорт маршрутов 
const ticketroute = require ('./routes/ticketsrouter');
//Создаем веб-сервер
const app = express()

// Для обработки запросов  подключаем middleware (bodyParser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Подключаемся к базе данных aviabooking
mongoose.connect("mongodb://127.0.0.1:27017/aviabooking", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Cервер прослушивает входящие соединения!");
    });
});
app.use(express.static(__dirname + "/client"));
// Для импортированного файла (кода) games.js задаем путь '/' к обработчику
app.use('/', ticketroute);
