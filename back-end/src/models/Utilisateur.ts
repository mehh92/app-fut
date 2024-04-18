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