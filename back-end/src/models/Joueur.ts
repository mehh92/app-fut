import mongoose from "mongoose"

export interface IJoueur {
    id: number,
    nom: string,
    prenom: string,
    prix: number,
    poste: string,
    note: number,
    club : string
}


export const joueurSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    prix: Number,
    poste: String,
    note: Number,
    club : String
})


const Joueur = mongoose.model<IJoueur>('Joueur', joueurSchema)



export default Joueur
