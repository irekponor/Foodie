import FooterCard from "./FooterCard";

import { FiPhoneCall } from "react-icons/fi";
import {
  LiaGiftSolid,
  LiaMoneyBillWaveSolid,
  LiaShippingFastSolid,
} from "react-icons/lia";

const data = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
  },
  {
    title: "Guaranteed Best Price",
    icon: <LiaMoneyBillWaveSolid />,
  },
  {
    title: "Free Pickup",
    icon: <LiaGiftSolid />,
  },
  {
    title: "24/7 Care",
    icon: <FiPhoneCall />,
  },
];

const Footer = () => {
  return (
    <div className="container pt-16 pb-7">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((el) => (
          <FooterCard key={el.title} title={el.title} icon={el.icon} />
        ))}
      </div>
      <div className="border-t border-gray-300 mt-16">
        <div className="container text-center text-gray-500 py-4">
          &copy; Copyright @Emmanuel Irekponor 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
