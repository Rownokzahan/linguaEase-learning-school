import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./paymentStyles.css";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

const CheckoutForm = ({ price, program }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post(`/create-payment-intent`, { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCardError("");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        transactionId: paymentIntent.id,
        programId: program?.program?._id,
        selectedProgramId: program?._id,
        email: user?.email,
        price: price,
        date: new Date(),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res?.data?.insertResult?.insertedId) {
          toast.success("Payment Successfull!");
          navigate("/dashboard/enrolled-programs");
        }
      });
    }
  };

  return (
    <>
      {cardError && (
        <p className="mb-4 text-red-600 text-center font-medium">{cardError}</p>
      )}
      {transactionId && (
        <p className="mb-4 text-lg font-medium text-primary text-center">
          Transaction Completed with Transaction Id :{" "}
          <span className="text-accent_2">{transactionId}</span>
        </p>
      )}

      <form className="max-w-2xl mx-auto py-12" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="bg-accent_2 text-white py-2 px-4 rounded w-1/3 mx-20"
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
