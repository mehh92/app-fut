import mongoose from "mongoose"

export interface IJoueur {
    id: number,
    nom: string,
    prenom: string,
    prix: number,
    poste: string,
    note: number,
    nom_du_club : string
}


export const joueurSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    prix: Number,
    poste: String,
    note: Number,
    nom_du_club : String
})


const Joueur = mongoose.model<IJoueur>('Joueur', joueurSchema)



export default Joueur
