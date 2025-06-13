const CustomCardItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="bg-white rounded-lg  border-[1px] border-pink-500 p-6 hover:shadow-xl transition-shadow duration-300 h-[250px] w-[180px] flex flex-col justify-between">
      {icon && <div className="text-2xl">{icon}</div>}
      <h3 className="text-md font-semibold mt-5">{title}</h3>
      <div className="flex flex-col gap-4 justify-between">
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CustomCardItem;
