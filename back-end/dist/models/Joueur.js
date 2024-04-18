"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joueurSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.joueurSchema = new mongoose_1.default.Schema({
    nom: String,
    prenom: String,
    prix: Number,
    poste: String,
    note: Number,
    club: String
});
const Joueur = mongoose_1.default.model('Joueur', exports.joueurSchema);
exports.default = Joueur;
