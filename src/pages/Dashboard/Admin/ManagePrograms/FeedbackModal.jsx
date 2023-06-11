import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const FeedbackModal = ({ isOpen, setIsOpen, feedbackProgramId }) => {
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    axiosSecure
      .patch(`/programs/feedback/${feedbackProgramId}`, {
        feedback: data?.feedback,
      })
        .then((response) => {
        if (response?.data?.modifiedCount) {
          toast.success(`Feedback send successfully!`);
        }
      })
      .catch();
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
            reset();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Feedback
                  </Dialog.Title>

                  <div className="space-y-4 mt-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <textarea
                        rows="4"
                        placeholder="Write here..."
                        className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-200  focus:outline-gray-300 focus:outline-2 outline-gray-300"
                        {...register("feedback")}
                        required
                      ></textarea>
                      <div className="flex justify-end items-center gap-3 text-white">
                        <button
                          type="button"
                          className="bg-red-400 py-2 px-4 rounded"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="bg-accent_2 py-2 px-4 rounded"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FeedbackModal;
