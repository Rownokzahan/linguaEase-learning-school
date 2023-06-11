import ActiveLink from "../ActiveLink";
import { BiSelectMultiple } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";

const StudentLinks = () => {
  return (
    <>
      <ActiveLink
        to={"/dashboard/selected-programs"}
        icon={BiSelectMultiple}
        label={"Selected Programs"}
      />
      <ActiveLink
        to={"/dashboard/enrolled-programs"}
        icon={MdPayments}
        label={"Enrolled Programs"}
      />
      <ActiveLink
        to={"/dashboard/payment-history"}
        icon={TfiWallet}
        label={"Payment History"}
      />
    </>
  );
};

export default StudentLinks;
