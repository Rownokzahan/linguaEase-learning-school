const Spinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative m-auto">
        <div className="w-12 h-12 rounded-full absolute border-8 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-8 border-solid border-accent_2 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Spinner;
