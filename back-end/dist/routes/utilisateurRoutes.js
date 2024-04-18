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
const Utilisateur_1 = __importDefault(require("../models/Utilisateur"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const utilisateurs = yield Utilisateur_1.default.find();
        res.status(200).json(utilisateurs);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const utilisateur = yield Utilisateur_1.default.findById(req.params.id);
        if (!utilisateur)
            return res.status(404).send('Utilisateur non trouvé');
        res.json(utilisateur);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const utilisateur = req.body;
        const nouvelUtilisateur = new Utilisateur_1.default(utilisateur);
        yield nouvelUtilisateur.save();
        res.status(201).json(nouvelUtilisateur);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const utilisateur = yield Utilisateur_1.default.findById(req.params.id);
        if (!utilisateur)
            return res.status(404).send('Utilisateur non trouvé');
        yield Utilisateur_1.default.findByIdAndDelete(req.params.id);
        res.send('Utilisateur supprimé');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const utilisateur = yield Utilisateur_1.default.findById(req.params.id);
        if (!utilisateur)
            return res.status(404).send('Utilisateur non trouvé');
        yield Utilisateur_1.default.findByIdAndUpdate(req.params.id, req.body);
        res.send('Utilisateur mis à jour');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;