import { Candidate } from '../entities/Candidate';

export interface CandidateRepository {
  createCandidate(candidate: Candidate): Promise<Candidate>;
  findCandidateByEmail(correoElectronico: string): Promise<Candidate | null>;
}