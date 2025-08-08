import { useUsers } from "../hooks/useUsers";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { SearchBar } from "./SearchBar";
import { UserCard } from "./UserCard";

export const UserList = () => {
  const { filteredUsers, isLoading, error, searchTerm, setSearchTerm } = useUsers();

  return (
    <div className="flex flex-col my-5 items-center">
      <h1 className="text-3xl font-bold mb-5">Mini User Dashboard</h1>

      <div className="my-5">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      {(() => {
        if (isLoading) {
          return <Loading />
        }

        if (error) {
          return <ErrorMessage message={error} />
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
