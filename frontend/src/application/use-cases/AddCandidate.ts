import { CandidateRepository } from '../../domain/repositories/CandidateRepository';
import { Candidate } from '../../domain/entities/Candidate';

export class AddCandidate {
  constructor(private candidateRepository: CandidateRepository) {}

  async execute(candidate: Candidate): Promise<Candidate> {
    return this.candidateRepository.addCandidate(candidate);
  }
}