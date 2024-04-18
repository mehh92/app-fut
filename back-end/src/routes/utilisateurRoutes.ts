import { Router, Request, Response } from "express";
import Utilisateur, { IUtilisateur } from "../models/Utilisateur";

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
  
  // router.post('/', async (req: Request, res: Response) => {
  //   try {
  //     const utilisateur: IUtilisateur = req.body;
  //     const nouvelUtilisateur = new Utilisateur(utilisateur);
  //     await nouvelUtilisateur.save();
  //     res.status(201).json(nouvelUtilisateur);
  //   } catch (error: any) {
  //     res.status(500).json({ message: error.message });
  //   }
  // });

  router.post('/inscription', async (req: Request, res: Response) => {
    try {
        const utilisateur: IUtilisateur = req.body;

        const utilisateurExistant = await Utilisateur.findOne({ email: utilisateur.email });
        if (utilisateurExistant) {
          return res.status(400).json({ message: "Cet utilisateur existe déjà." });
        } else {
          const nouvelUtilisateur = new Utilisateur(utilisateur);

          await nouvelUtilisateur.save();

          res.status(201).json(nouvelUtilisateur);
        }
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