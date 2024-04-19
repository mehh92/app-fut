"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.utilisateurSchema = new mongoose_1.default.Schema({
    nom: String,
    prenom: String,
    email: String,
    nom_du_club: String,
    mot_de_passe: String,
    role: Boolean,
    budget: Number,
});
const Utilisateur = mongoose_1.default.model('Utilisateur', exports.utilisateurSchema);
exports.default = Utilisateur;
