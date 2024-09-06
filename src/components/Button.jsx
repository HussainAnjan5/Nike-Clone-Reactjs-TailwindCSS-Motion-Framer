
const Button = ({ fullWidth,label, iconURL, textColor = 'text-white', backgroundColor = 'bg-coral-red', borderColor = 'border-coral-red' }) => {
  return (
    <div>
      <button
        className={`flex justify-center items-center font-montserrat text-lg gap-2 px-7 py-4 leading-none rounded-full ${fullWidth && 'w-full'} border ${backgroundColor} ${textColor} ${borderColor}`}
      >
        {label}
        {iconURL && <img src={iconURL} alt="" className="ml-2 h-5 w-5 rounded-full" />}
      </button>
    </div>
  );
};

export default Button;
