import React, { useEffect, useState } from "react";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/team/getAll");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Extract team members from the response object
        const teamMembers = data.response || data;
        
        // Validate data
        if (!Array.isArray(teamMembers)) {
          throw new Error("Received data is not an array");
        }
        
        setTeam(teamMembers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Rest of the component remains the same as in the original code
  // (loading state, error state, and rendering logic)

  // Render loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 mb-8 w-64 mx-auto"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <div className="w-32 h-32 mx-auto rounded-full mb-4 bg-gray-300"></div>
                <div className="h-4 bg-gray-200 mb-2 w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-200 mb-2 w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  // Render team members
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.isArray(team) && team.length > 0 ? (
          team.map((member) => {
            // Defensive checks
            if (!member || typeof member !== 'object') return null;

            return (
              <div 
                key={member._id || Math.random().toString()} 
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <img 
                  src={member.image || '/default-avatar.png'} 
                  alt={member.name || 'Team Member'} 
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name || 'Unnamed Member'}
                </h3>
                <p className="text-gray-500">{member.role || 'Role Not Specified'}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {member.bio || 'No biography available'}
                </p>
                
                {/* Optional expertise section with additional defensive checks */}
                {Array.isArray(member.expertise) && member.expertise.length > 0 && (
                  <div className="mt-3 flex flex-wrap justify-center">
                    {member.expertise.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-1 px-2.5 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No team members found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;