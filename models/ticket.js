// Директива use strict.
'use strict';
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;
// Определяем схему сo свойствами
const ticketSchema = new Schema({
    to: String,
    from: String,
    dateTo: Date,
    dateFrom: Date,
    price: Number,
    airplane: String
}, {versionKey: false});
// Создаем модель, с помощью которой на основе ticketSchema создаем документы
// Экспортировать модель
const Ticket = module.exports = mongoose.model('Ticket', ticketSchema);
