// Директива use strict.
'use strict';
// Импорт модели
const Ticket = require('../models/ticket');

// Добавление документа в MongoDB
exports.ticketCreate = function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const to = req.body.to;
    const from = req.body.from;
    const dateTo = req.body.dateTo;
    const dateFrom = req.body.dateFrom;
    const price = req.body.price;
    const airplane = req.body.airplane;
    const ticket = new Ticket({
        to: to,
        from: from,
        dateTo: dateTo,
        dateFrom: dateFrom,
        price: price,
        airplane: airplane
    });
    ticket.save(function (err) {
        if (err) return console.log(err);
        res.send(ticket);
    });
};
// Чтение документов
exports.ticketRead = function (req, res) {
    let from = req.params.from
    let to = req.params.to
    console.log(req.params.from)
    Ticket.find({from: {$eq: req.params.from}}, function (err, tickets) {
        if (err) return console.log(err);
        res.send(tickets)
    });
};
exports.ticketReadByFilter = function (req, res) {



    // Ticket.find({
    //     to: {$eq: req.body.to},
    //     from: {$eq: req.body.from},
    //     dateTo: {$eq: req.body.dateTo},
    //     dateFrom: {$eq: req.body.dateFrom},
    //     airplane: {$eq: req.body.dateFrom}
    // }, function (err, tickets) {
    //     if (err) return console.log(err);
    //     res.send(tickets)
    // });
};
// Чтение документов
exports.ticketReadAdmin = function (req, res) {
    console.log('wtf')
    Ticket.find({}, function (err, tickets) {
        if (err) return console.log(err);
        res.send(tickets)
    });
};
// Чтение документа по id
exports.ticketReadId = function (req, res) {
    Ticket.findById(req.params.id, function (err, ticket) {
        if (err) return console.log(err);
        res.send(ticket);
    });
};
// Удаление документа
exports.ticketDelete = function (req, res) {
    Ticket.findByIdAndDelete(req.params.id, function (err, ticket) {
        if (err) return console.log(err);
        res.send(ticket);
    });
};
// Обновление документа
exports.ticketPut = function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const to = req.body.to;
    const from = req.body.from;
    const dateTo = req.body.dateTo;
    const dateFrom = req.body.dateFrom;
    const price = req.body.price;
    const airplane = req.body.airplane;
    //const ticket = {to: to, from: from, dateTo: dateTo, dateFrom: dateFrom, price: price, customer: customer};
    Ticket.findOneAndUpdate({_id: id}, {$set: {airplane: airplane}}, function (err, ticket) {
        if (err) return console.log(err);
        res.send(ticket);
    });
};
