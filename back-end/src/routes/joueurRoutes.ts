import {Router, Request, Response} from 'express'
import Joueur, {IJoueur} from '../models/Joueur'

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const joueur = new Joueur(req.body);
    await joueur.save();
    res.status(201).send(joueur);
});

router.get('/', async (req: Request, res: Response) => {
    const joueurs = await Joueur.find();
    res.send(joueurs);
});

router.get('/:id', async (req: Request, res: Response) => {
    const joueur = await Joueur.findById(req.params.id);
    if (!joueur) {
    res.status(404).send('Joueur non trouvé');
    } else {
    res.send(joueur);
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const joueur = await Joueur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!joueur) {
    res.status(404).send('Joueur non trouvé');
    } else {
    res.send(joueur);
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const joueur = await Joueur.findByIdAndDelete(req.params.id);
    if (!joueur) {
    res.status(404).send('Joueur non trouvé');
    } else {
    res.status(204).send();
    }
});

export default router

