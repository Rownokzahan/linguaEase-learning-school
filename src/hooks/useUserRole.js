import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
  const { user, loading } = useAuth();
  const { data: userRole, isLoading: isUserRoleLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading,
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/role/${user?.email}`
        );
        return res?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return [userRole, isUserRoleLoading];
};

export default useUserRole;
