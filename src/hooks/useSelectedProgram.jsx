import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedProgram = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    data: selectedPrograms,
    isLoading: isSelectedProgramsLoading,
    refetch,
  } = useQuery({
    queryKey: ["selectedPrograms", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected-programs/${user?.email}`);
      return res.data;
    },
  });
  return [selectedPrograms, isSelectedProgramsLoading, refetch];
};

export default useSelectedProgram;
