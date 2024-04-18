import React, { useState } from "react";
import './Register.css';
import { Link } from "react-router-dom";

export default function RegistrationForm() {

    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nomclub, setNomclub] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [budget, setBudget] = useState(0);

    const handleRegistration = async () => {
        try {
            const response = await fetch.post('/api/utilisateurs/inscription', {
                email,
                nom,
                prenom,
                nomclub,
                password,
                budget
            });
            console.log(response.data.message); // Affiche le message de succès de l'API
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement :', error);
        }
    };

    return (
        <div className="container">
            <h1 className="display-4">Inscription</h1>
            <div>
                <label className="form-label">Email</label>
                <input className='form-control' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="form-label">Nom</label>
                <input className='form-control' type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                <label className="form-label">Prénom</label>
                <input className='form-control' type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                <label className="form-label">Nom du club</label>
                <input className='form-control' type="text" value={nomclub} onChange={(e) => setNomclub(e.target.value)} />
                <label className="form-label">budget</label>
                <input className='form-control' type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
                <label className="form-label">Mot de passe</label>
                <input className='form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="form-label">Confirmation de mot de passe</label>
                <input className='form-control' type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />

                <button type="submit" className="btn btn-primary mt-3" onClick={handleRegistration}>Connexion</button>

                <p className="mt-3">
                    Déjà inscrit ? <Link to="/" className="btn btn-link">Connectez-vous ici</Link>
                </p>
            </div>
        </div>
    );
}
