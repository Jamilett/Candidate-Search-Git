import { useState } from "react";
import { GitHubUser } from "../interfaces/Candidate.interface";

export default function GitHubUserCard({ users }: { users: GitHubUser[] }) {
  const [index, setIndex] = useState(0);

  const handleAccept = () => {
    const acceptedUsers = JSON.parse(localStorage.getItem("acceptedUsers") || "[]");
    acceptedUsers.push(users[index]);
    localStorage.setItem("acceptedUsers", JSON.stringify(acceptedUsers));
    nextUser();
  };

  const handleReject = () => {
    nextUser();
  };

  const nextUser = () => {
    if (index < users.length - 1) {
      setIndex(index + 1);
    } else {
      alert("No more users to display.");
    }
  };

  return (
    <div className="flex justify-center mt-6">
      {users[index] ? (
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-80">
          <img src={users[index].avatar_url} alt={users[index].login} className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-xl font-bold mt-4">{users[index].login}</h2>
          <p className="text-gray-500">Company: {users[index].type}</p>
          <a href={users[index].html_url} target="_blank" className="text-blue-500 underline block mt-2">
            {users[index].url}
          </a>
          <div className="flex justify-evenly m-6">
            <button onClick={handleReject} className="bg-red-500 text-white px-4 py-2 rounded-full">❌</button>
            <button onClick={handleAccept} className="bg-green-500 text-white px-4 py-2 rounded-full">✔️</button>
          </div>
        </div>
      ) : (
        <p className="text-xl">No more users</p>
      )}
    </div>
  );
}

