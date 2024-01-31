import { useState } from "react";
import { BsBarChartLineFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  MdFastfood,
  MdLocalOffer,
  MdFeedback,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { BiLogOutCircle, BiMenu } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { saveToken, setCurrentPage } from "../redux/slices/User";
const Sidebar = () => {
  const currentPage = useSelector((state) => state?.admin?.currentPage);
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch()
  const Menus = [
    { title: "Dashboard", icon: <BsBarChartLineFill /> },
    { title: "Dish", icon: <MdFastfood /> },
    { title: "Offers", icon: <MdLocalOffer /> },
    { title: "Feedback ", icon: <MdFeedback /> },
    { title: "order ", icon: <IoFastFood /> },
    { title: "User ", icon: <AiOutlineUser /> },
    { title: "Admin ", icon: <MdOutlineManageAccounts /> },
    { title: "Logout ", icon: <BiLogOutCircle /> },
  ];
  const NavigateUser = (item) => {
    dispatch(setCurrentPage(item))
    const pageAddress = item?.toLowerCase();
    navigate(`/${pageAddress}`);
  };
  const Logout = () => {
    dispatch(saveToken(''))
    navigate('/')
  };
  return (
    <div className="flex shadow-lg">
      <div
        className={` ${open ? "w-60" : "w-10"
          } bg-white h-screen p-5  pt-8 relative duration-300`}
      >
        <div className="">
          <BiMenu
            fontSize={24}
            className={`absolute cursor-pointer -right-3 top-4 w-7
         rounded-full  ${!open && "rotate-180"} bg-indigo-600 text-white`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png"
              className={`cursor-pointer w-100 h-10 duration-500 ${open && "rotate-[360deg]"
                }`}
            />
            <h1
              className={`text-indigo-600 origin-left text-xl duration-200 font-bold ${!open && "scale-0"
                }`}
            >
              DASHBOARD
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                onClick={() =>
                  index == Menus.length - 1
                    ? Logout(Menu?.title)
                    : NavigateUser(Menu?.title)
                }
                key={index}
                className={`flex font-semibold  rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
        mt-2 ${Menu?.title === currentPage && open
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-indigo-600"
                  } `}
              >
                {Menu?.icon}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;