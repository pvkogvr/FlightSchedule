// директива use strict.
'use strict';
const express = require('express');
const router = express.Router();
// Подключаем модуль body-parser.
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
// Импорт контроллеров
const ticketController = require('../controllers/ticketcontroller');

// Маршрут добавления документа в MongoDB
router.post ("/api/tickets", ticketController.ticketCreate);
// Маршрут чтения документов
router.get('/api/tickets/:from', ticketController.ticketRead);
// Маршрут чтения документов
router.post('/api/tickets/filter', ticketController.ticketReadByFilter);
// Маршрут чтения документов
router.get('/api/tickets', ticketController.ticketReadAdmin);
// Маршрут чтения документа по id
router.get("/api/tickets/:id", ticketController.ticketReadId); //deprecated
// Маршрут удаления документов
router.delete("/api/ticket/:id", ticketController.ticketDelete);
// Маршрут обновления документов
router.put("/api/tickets", jsonParser, ticketController.ticketPut);
// Export the router
module.exports = router;
