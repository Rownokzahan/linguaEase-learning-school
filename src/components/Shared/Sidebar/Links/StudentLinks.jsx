import ActiveLink from "../ActiveLink";
import { RxDashboard } from "react-icons/rx";
import { BiSelectMultiple } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";

const StudentLinks = () => {
  return (
    <div className="flex flex-col text-lg">
      <ActiveLink to={"/dashboard"} icon={RxDashboard} label={"Dashboard"} />
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
    </div>
  );
};

export default StudentLinks;