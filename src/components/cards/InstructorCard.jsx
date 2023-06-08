const InstructorCard = ({ instructor }) => {
  const { imageUrl, name, email } = instructor || {};

  return (
    <div className="w-full h-64 relative bg-zinc-600 border-l-2 border-b-2 border-dashed border-zinc-100 group">
      <img
        src={imageUrl}
        className="h-full w-full object-cover group-hover:mix-blend-multiply duration-300"
      />

      <div className="opacity-0 group-hover:opacity-95 duration-300 absolute bottom-0 p-4 text-gray-200">
        <h4 className="text-2xl font-semibold">{name}</h4>
        <p className="italic">{email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
