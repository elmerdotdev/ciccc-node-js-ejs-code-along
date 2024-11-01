"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
const hobbies = ["Drawing", "Dancing", "Skydiving", "Eating"];
// Home
pageRouter.get('/', (req, res) => {
    res.status(200).render('index', { title: "My Webpage", showInfo: false });
});
// About
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about', { title: "About Us", hobbies });
});
exports.default = pageRouter;
