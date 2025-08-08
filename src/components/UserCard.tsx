import type { User } from "../types/types"

type UserCardProps = {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="p-6 rounded-xl border-2 border-emerald-300 shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-emerald-700">{user.name}</h3>
      <p className="text-gray-600 mb-1">{user.email}</p>
      <p className="text-gray-500">{user.address.city}</p>
    </div>
  )
}
