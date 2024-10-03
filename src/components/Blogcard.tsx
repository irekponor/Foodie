import React from "react";

interface propsType {
  img: string;
  date: string;
  comment: string;
  title: string;
}
const Blogcard: React.FC<propsType> = ({ img, date, comment, title }) => {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt=""
      />
      <div className="text-color1 font-medium">
        <span>{date} / </span>
        <span>{comment} Comments </span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
};

export default Blogcard;
