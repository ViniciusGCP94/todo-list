const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-medium text-gray-400">{label}</label>}
      <input 
        className=" px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-300"
        {...props} 
      />
    </div>
  );
};

export default Input;