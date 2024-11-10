import { CandidateRepository } from '../../domain/repositories/CandidateRepository';
import { Candidate } from '../../domain/entities/Candidate';

export class CreateCandidate {
  constructor(private candidateRepository: CandidateRepository) {}

  async execute(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    education: string,
    workExperience: string
  ): Promise<Candidate> {
    const candidate = new Candidate(0, firstName, lastName, email, phone, address, education, workExperience);
    return this.candidateRepository.createCandidate(candidate);
  }
}