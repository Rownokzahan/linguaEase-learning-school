const ReviewCard = ({ review }) => {
  const { title, description, image, name } = review;

  return (
    <div className="space-y-6">
      <div className="p-8 border-2 border-dashed md:h-52 space-y-4 relative ">
        <h5 className="font-semibold text-lg text-accent_2">{title}</h5>
        <p>{description}</p>
        <div className="absolute -bottom-[10px] left-7 w-4 h-4 transform rotate-45 bg-white dark:bg-black border-r-2 border-b-2 border-dashed"></div>
      </div>
      <div className="flex">
        <img src={image} className="h-full w-20 rounded-s" alt="" />
        <div className="bg-accent_2 text-white dark:text-black p-4 rounded-e">
          <p className="font-medium">{name}</p>
          <p className="text-sm font-medium">Student</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
