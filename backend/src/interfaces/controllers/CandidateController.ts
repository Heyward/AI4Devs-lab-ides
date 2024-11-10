import { Request, Response } from 'express';
import { CreateCandidate } from '../../application/use-cases/CreateCandidate';
import { PrismaCandidateRepository } from '../../infrastructure/repositories/PrismaCandidateRepository';

const candidateRepository = new PrismaCandidateRepository();
const createCandidate = new CreateCandidate(candidateRepository);

export class CandidateController {
  async createCandidate(req: Request, res: Response): Promise<void> {
    const { firstName, lastName, email, phone, address, education, workExperience } = req.body;
    try {
      const candidate = await createCandidate.execute(
        firstName,
        lastName,
        email,
        phone,
        address,
        education,
        workExperience
      );
      res.status(201).json(candidate);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}