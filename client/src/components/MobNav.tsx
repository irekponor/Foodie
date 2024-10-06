import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import Badge from "./Badge";

const MobNav = ({ setShowCart }: { setShowCart: (show: boolean) => void }) => {
  return (
    // header for mobile menu
    <div className="sticky top-0 bg-white z-10">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <IoIosMenu size={30} />
            <BsSearch size={20} />
          </div>

          <h1 className="text-4xl">Logo</h1>

          <div className="flex gap-4 text-[30px]">
            <AiOutlineUser />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart size={30} />
            <Badge size="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobNav;
