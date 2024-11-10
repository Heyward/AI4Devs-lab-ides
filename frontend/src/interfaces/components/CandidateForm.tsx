import React, { useState } from 'react';
import { AddCandidate } from '../../application/use-cases/AddCandidate';
import { ApiCandidateRepository } from '../../infrastructure/repositories/ApiCandidateRepository';
import { Candidate } from '../../domain/entities/Candidate';

const candidateRepository = new ApiCandidateRepository();
const addCandidate = new AddCandidate(candidateRepository);

const CandidateForm: React.FC = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    workExperience: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCandidate({ ...candidate, [name]: value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!candidate.firstName) newErrors.firstName = 'First name is required';
    if (!candidate.lastName) newErrors.lastName = 'Last name is required';
    if (!candidate.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(candidate.email)) newErrors.email = 'Email is invalid';
    if (!candidate.phone) newErrors.phone = 'Phone number is required';
    if (!candidate.address) newErrors.address = 'Address is required';
    if (!candidate.education) newErrors.education = 'Education is required';
    if (!candidate.workExperience) newErrors.workExperience = 'Work experience is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    await addCandidate.execute(candidate);
    alert('Candidate added successfully');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          name="firstName"
          value={candidate.firstName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          name="lastName"
          value={candidate.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          name="email"
          value={candidate.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          name="phone"
          value={candidate.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          name="address"
          value={candidate.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Education</label>
        <input
          name="education"
          value={candidate.education}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.education && <p className="text-red-500 text-xs">{errors.education}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Work Experience</label>
        <input
          name="workExperience"
          value={candidate.workExperience}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.workExperience && <p className="text-red-500 text-xs">{errors.workExperience}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Add Candidate</button>
    </form>
  );
};

export default CandidateForm;