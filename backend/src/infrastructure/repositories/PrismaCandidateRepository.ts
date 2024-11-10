import { PrismaClient } from '@prisma/client';
import { CandidateRepository } from '../../domain/repositories/CandidateRepository';
import { Candidate } from '../../domain/entities/Candidate';

export class PrismaCandidateRepository implements CandidateRepository {
  private prisma = new PrismaClient();

  async createCandidate(candidate: Candidate): Promise<Candidate> {
    const createdCandidate = await this.prisma.candidate.create({
      data: {
        firstName: candidate.firstName,
        lastName: candidate.lastName,
        email: candidate.email,
        phone: candidate.phone,
        address: candidate.address,
        education: candidate.education,
        workExperience: candidate.workExperience,
      },
    });
    return new Candidate(
      createdCandidate.id,
      createdCandidate.firstName,
      createdCandidate.lastName,
      createdCandidate.email,
      createdCandidate.phone,
      createdCandidate.address,
      createdCandidate.education,
      createdCandidate.workExperience
    );
  }

  async findCandidateByEmail(email: string): Promise<Candidate | null> {
    const candidate = await this.prisma.candidate.findUnique({
      where: { email },
    });
    if (!candidate) return null;
    return new Candidate(
      candidate.id,
      candidate.firstName,
      candidate.lastName,
      candidate.email,
      candidate.phone,
      candidate.address,
      candidate.education,
      candidate.workExperience
    );
  }
}