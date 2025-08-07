import { useUsers } from "../hooks/useUsers";
import { UserCard } from "./UserCard";

export const UserList = () => {
  const { filteredUsers, isLoading, error, searchTerm, setSearchTerm } = useUsers();

  return (
    <div className="flex flex-col my-5 items-center">
      <h1 className="text-3xl font-bold mb-5">Mini User Dashboard</h1>

      {(() => {
        if (isLoading) {
          return <div>Loading...</div>
        }

        if (error) {
          return <div className="text-red-500 text-lg">{error}</div>
        }

        if (filteredUsers.length === 0) {
          return (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">No users found matching your search.</p>
            </div>
          );
        }

        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
              />
            ))}
          </div>
        );
      })()}
    </div>
  )
}
