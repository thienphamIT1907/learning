import { useUserStore } from "../zustand/userStore";

const UserList = () => {
  const users = useUserStore((state) => state.users);
  const fetchUsers = useUserStore((state) => state.fetchUsers);

  return (
    <div>
      <button
        onClick={fetchUsers}
        className="px-4 py-2 bg-teal-950 text-white rounded-md"
      >
        Fetch Users
      </button>
      {users?.length > 0 &&
        users.map(({ id, email }) => <p key={id}>{email}</p>)}
    </div>
  );
};

export default UserList;
