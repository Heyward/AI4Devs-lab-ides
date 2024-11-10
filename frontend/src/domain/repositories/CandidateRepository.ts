import { Candidate } from '../entities/Candidate';

export interface CandidateRepository {
  addCandidate(candidate: Candidate): Promise<Candidate>;
}