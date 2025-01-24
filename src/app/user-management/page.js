import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import { Badge } from "@/components/ui/badge";
import UserCard from "@/components/User-Card";

const UserManagement = async () => {
  const usersList = await fetchUsersAction();
  // console.log(usersList);
  return (
    <div className="p-20 max-w-16xl">
      <div className="flex justify-between">
        {/* <h2>User Management</h2> */}
        <Badge> User Management </Badge>
        <AddNewUser />
      </div>

      <div className="mt-6 grid  sm:grid-cols-2 lg:grid-cols-3  gap-5">
        {usersList?.data?.length > 0 ? (
          usersList.data.map((user, index) => (
            <UserCard key={index} user={user} />
          ))
        ) : (
          <h2>No Users Found! Create One </h2>
        )}
      </div>
      
    </div>
  );
};

export default UserManagement;
