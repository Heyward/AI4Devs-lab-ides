import { Router } from 'express';
import { CandidateController } from '../controllers/CandidateController';

const router = Router();
const candidateController = new CandidateController();

router.post('/candidates', (req, res) => candidateController.createCandidate(req, res));

export default router;