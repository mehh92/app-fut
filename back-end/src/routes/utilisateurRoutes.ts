import { Router, Request, Response } from "express";
import Utilisateur, { IUtilisateur } from "../models/Utilisateur";
import bcrypt from 'bcrypt';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const utilisateurs = await Utilisateur.find();
    res.status(200).json(utilisateurs);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const utilisateur = await Utilisateur.findById(req.params.id);
    if (!utilisateur) return res.status(404).send('Utilisateur non trouvé');
    res.json(utilisateur);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/inscription', async (req: Request, res: Response) => {
  try {
    const utilisateur: IUtilisateur = req.body;

    const utilisateurExistant = await Utilisateur.findOne({ email: utilisateur.email });
    if (utilisateurExistant) {
      return res.status(400).json({ message: "Cet utilisateur existe déjà." });
    } else {

      const nouvelUtilisateur = new Utilisateur(utilisateur);
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(utilisateur.mot_de_passe, salt);
      nouvelUtilisateur.mot_de_passe = hash;

      await nouvelUtilisateur.save();

      res.status(201).json(nouvelUtilisateur);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/connexion', async (req: Request, res: Response) => {
  try {
    const { email, mot_de_passe }: Pick<IUtilisateur, "email" | "mot_de_passe"> = req.body;

    const utilisateur = await Utilisateur.findOne({ email });
    if (!utilisateur) {
      return res.status(400).json({ message: "L'email ou le mot de passe est incorrect." });
    }
    const motDePasseValide = bcrypt.compareSync(mot_de_passe, utilisateur.mot_de_passe);
    if (!motDePasseValide) {
      return res.status(400).json({ message: "L'email ou le mot de passe est incorrect." });
    }

    res.status(200).json({ message: "Connexion réussie." });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const utilisateur = await Utilisateur.findById(req.params.id);
    if (!utilisateur) return res.status(404).send('Utilisateur non trouvé');
    await Utilisateur.findByIdAndDelete(req.params.id);
    res.send('Utilisateur supprimé');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const utilisateur = await Utilisateur.findById(req.params.id);
    if (!utilisateur) return res.status(404).send('Utilisateur non trouvé');
    await Utilisateur.findByIdAndUpdate(req.params.id, req.body);
    res.send('Utilisateur mis à jour');
  }
  catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router