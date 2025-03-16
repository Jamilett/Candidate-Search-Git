import { useEffect, useState } from "react";
import { GitHubUser } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<GitHubUser[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("acceptedUsers") || "[]");
    setCandidates(saved);
  }, []);

  const handleReject = (login: string) => {
    const updatedCandidates = candidates.filter(candidate => candidate.login !== login);
    setCandidates(updatedCandidates);
    localStorage.setItem("acceptedUsers", JSON.stringify(updatedCandidates));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      <div className="overflow-x-auto p-4">
        {candidates.length > 0 ?
          <table className="table-auto w-full">
            <thead>
              <tr className="">
                <th className="p-3 text-left">Avatar</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Profile</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.login} className="border-t">
                  <td className="p-3">
                    <img
                      src={candidate.avatar_url}
                      alt={candidate.login}
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td className="p-3">{candidate.login || "No name available"}</td>
                  <td className="p-3">@{candidate.login}</td>
                  <td className="p-3">{candidate.repos_url || "Unknown"}</td>
                  <td className="p-3">{candidate.url || "Not provided"}</td>
                  <td className="p-3">{candidate.type || "No company listed"}</td>
                  <td className="p-3">
                    <a
                      href={candidate.html_url}
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      View Profile
                    </a>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleReject(candidate.login)}
                      className="bg-red-500 text-white px-4 py-2 rounded-full"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> : (
            <p className="text-xl text-gray-700">No candidates have been accepted yet.</p>
          )}
      </div>
    </>
  );
};

export default SavedCandidates;
