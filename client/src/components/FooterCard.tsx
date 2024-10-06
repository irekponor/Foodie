import React from "react";

interface propsType {
  title: string;
  icon: React.ReactNode;
}
const FooterCard: React.FC<propsType> = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className="bg-gray-400 w-[50px] h-[50px] text-color2 text-[24px] grid place-items-center 
      rounded-full"
      >
        {icon}
      </div>
      <div>
        <h3 className="text-color1 font-medium text-xl">{title}</h3>
        <p className="text-gray-500 text-[14px]">Lorem, ipsum dolor..</p>
      </div>
    </div>
  );
};

export default FooterCard;
