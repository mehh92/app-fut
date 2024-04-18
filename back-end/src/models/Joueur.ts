import mongoose from "mongoose"

export interface IUtilisateur {
    id: number,
    nom: string,
    prenom: string,
    prix: number,
    poste: string,
    note: number,
    club : string
}


export const joueurSchema = new mongoose.Schema({
    id: Number,
    nom: String,
    prenom: String,
    prix: Number,
    poste: String,
    note: Number,
    club : String
})


const Joueur = mongoose.model('Joueur', joueurSchema)



export default Joueur
