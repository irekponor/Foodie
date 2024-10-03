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
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((el) => (
          <FooterCard key={el.title} title={el.title} icon={el.icon} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
