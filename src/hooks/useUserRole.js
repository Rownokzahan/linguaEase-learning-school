import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
  const { user, loading } = useAuth();
  const { data: userRole, isLoading: isUserRoleLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}`
      );

      const role = res?.data?.role || "student";
      return role;
    },
  });
  return [userRole, isUserRoleLoading];
};

export default useUserRole;
