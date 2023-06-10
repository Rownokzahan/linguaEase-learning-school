import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../components/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import CheckoutForm from "./CheckoutForm";
import Spinner from "../../../../components/Spinner";

const stripePromise = loadStripe(import.meta.env.VITE_PAYEMENT_GATEWAY_PK);

const Payment = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const [program, setProgram] = useState({});
  const [isProgramLoading, setIsProgramLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/selected-programs/program/${id}`)
      .then((res) => {
        setProgram(res.data);
        setIsProgramLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsProgramLoading(false);
      });
  }, [axiosSecure, id]);

  const price = parseFloat(program?.program?.price);

  return (
    <>
      <div className="p-12">
        <SectionTitle label={"Complete Payment"} />
        {isProgramLoading ? (
          <Spinner fullscreen={false} />
        ) : (
          <Elements stripe={stripePromise}>
            <CheckoutForm price={price} program={program} />
          </Elements>
        )}
      </div>
    </>
  );
};

export default Payment;
