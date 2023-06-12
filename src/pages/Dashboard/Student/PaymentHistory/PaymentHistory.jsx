import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Spinner from "../../../../components/Spinner";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import PaymentRow from "./PaymentRow";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure
      .get(`/payment-history/${user?.email}`)
      .then((res) => {
        setPayments(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [axiosSecure, user]);

  const hasPrograms =
    payments && Array.isArray(payments) && payments.length > 0;

  return (
    <>
      <Helmet>
        <title>LinguaEase | Payment History</title>
      </Helmet>

      <div className="p-12">
        <SectionTitle label={"Payment History"} />

        {isLoading ? (
          <Spinner />
        ) : hasPrograms ? (
          <>
            <div className="w-max mx-auto">
              <div className="overflow-x-auto">
                <table className="relative overflow-x-auto w-full my-10 shadow">
                  <thead className="font-inter tracking-wide font-medium text-white">
                    <tr>
                      <td className="rounded-tl-2xl bg-accent_2 text-left py-5 px-8">
                        Sl
                      </td>
                      <td className="bg-accent_2 text-left py-5 px-6">
                        Program
                      </td>
                      <td className="bg-accent_2 py-5 px-6 text-left">
                        Instructor
                      </td>
                      <td className="bg-accent_2 py-5 px-6 text-left">
                        Duration
                      </td>
                      <td className="bg-accent_2 py-5 px-6 text-left">Fee</td>
                      <td className="bg-accent_2 py-5 px-6 text-left">
                        Payment ID
                      </td>
                      <td className="rounded-tr-2xl bg-accent_2 py-5 px-6 text-left">
                        Payment Date
                      </td>
                    </tr>
                  </thead>

                  <tbody className="divide-y-2">
                    {payments?.map((payment, index) => (
                      <PaymentRow
                        key={payment._id}
                        payment={payment}
                        index={index + 1}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          "You have not made any payments yet"
        )}
      </div>
    </>
  );
};

export default PaymentHistory;
