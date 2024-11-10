export class Candidate {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public address: string,
    public education: string,
    public workExperience: string
  ) {}
}