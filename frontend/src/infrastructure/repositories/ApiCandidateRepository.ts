import { CandidateRepository } from '../../domain/repositories/CandidateRepository';
import { Candidate } from '../../domain/entities/Candidate';
import { ApiService } from '../../interfaces/services/ApiService';

export class ApiCandidateRepository implements CandidateRepository {
  async addCandidate(candidate: Candidate): Promise<Candidate> {
    const response = await ApiService.post('/candidates', candidate);
    return new Candidate(
      response.id,
      response.firstName,
      response.lastName,
      response.email,
      response.phone,
      response.address,
      response.education,
      response.workExperience
    );
  }
}