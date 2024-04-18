import mongoose from "mongoose"

export interface IUtilisateur {
    id: number,
    nom: string,
    prenom: string,
    email: string,
    nom_du_club : string,
    mot_de_passe : string,
    role: boolean,
    budget: number
}


export const utilisateurSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    nom_du_club : String,
    mot_de_passe : String,
    role: Boolean,
    budget: Number
})


const Utilisateur = mongoose.model<IUtilisateur>('Utilisateur', utilisateurSchema)



export default Utilisateur
