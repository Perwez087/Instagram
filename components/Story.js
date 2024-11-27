const Story = ({ username, img }) => {
  return (
    <div>
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 hover:scale-110 transition-transform duration-200 cursor-pointer ease-in-out"
        src={img}
        alt={username}
      />
      <p className="text-xs truncate w-14">{username}</p>
    </div>
  );
};

export default Story;
