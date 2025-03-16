import { useEffect, useState } from 'react';
import { searchGithub } from '../api/API';
import GitHubUserCard from '../components/CandidateCard';
import { GitHubUser } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  const [candidates, setCandidates] = useState<GitHubUser[]>([]);

  // Fetch GitHub users on component mount
  useEffect(() => {
    fetchGithubUsers();
  }, []); 

  const fetchGithubUsers = async () => {
    try {
      const response = await searchGithub();
      setCandidates(response);
      return response;
    } catch (error) {
      console.error('Error fetching GitHub users:', error);
      throw error;
    }
  };

  return (
    <>
      <h1>Candidate Search</h1>
      <GitHubUserCard users={candidates} />
    </>
  );
};

export default CandidateSearch;
