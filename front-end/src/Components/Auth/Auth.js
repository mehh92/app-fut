import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            if (!email || !password) {
                console.log('Veuillez remplir tous les champs');
                return;
            }
            const userData = {
                email: email,
                mot_de_passe: password
            }

            const response = await axios.post('http://localhost:3001/api/utilisateurs/connexion', userData);
            console.log(response.data.message);

            navigate('/home');
        } catch (error) {
            console.error('Erreur lors de la connexion');
        }
    };

    return (
        <div className="container">
            <h1 className="display-4">Connexion</h1>
            <div>
                <label className="form-label">Email</label>
                <div className="user-box">
                    <input
                        className='form-control'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="form-label">Mot de passe</label>
                    <input
                        className='form-control'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" onClick={handleLogin} className="btn btn-primary mt-3">Connexion</button>

                <p className="mt-3">
                    Pas encore de compte ? <Link to="/register" className="btn btn-link">Inscrivez-vous ici</Link>
                </p>
            </div>
        </div>
    );

}
