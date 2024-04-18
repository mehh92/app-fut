"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Joueur_1 = __importDefault(require("../models/Joueur"));
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const joueur = new Joueur_1.default(req.body);
    yield joueur.save();
    res.status(201).send(joueur);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const joueurs = yield Joueur_1.default.find();
    res.send(joueurs);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const joueur = yield Joueur_1.default.findById(req.params.id);
    if (!joueur) {
        res.status(404).send('Joueur non trouvé');
    }
    else {
        res.send(joueur);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const joueur = yield Joueur_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!joueur) {
        res.status(404).send('Joueur non trouvé');
    }
    else {
        res.send(joueur);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const joueur = yield Joueur_1.default.findByIdAndDelete(req.params.id);
    if (!joueur) {
        res.status(404).send('Joueur non trouvé');
    }
    else {
        res.status(204).send();
    }
}));
exports.default = router;
