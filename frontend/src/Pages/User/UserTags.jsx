import React from "react";
import { useNavigate } from "react-router-dom"; 
import { FaChessKing } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineFindReplace } from "react-icons/md";
import { TbReport } from "react-icons/tb";

const UserTags = () => {
  const navigate = useNavigate(); 

  const handleNotificationClick = () => {
    navigate("/notification-tag"); 
  };

  const handleHelpAndFAQClick = () => {
    navigate("/how-can-we-help"); 
  };

  const termsPrivacypolicyClick = () => {
    navigate("/terms-privacy-policy"); 
  };
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-1 mt-10 gap-6">
      <button className="w-full px-4 py-2 flex items-center gap-3 text-start bg-[#FFC700] text-black rounded shadow hover:bg-[#E0B200]">
        <FaChessKing className="text-xl" />
        <span>My Membership</span>
      </button>

      <button
        onClick={handleNotificationClick} 
        className="w-full px-4 py-2 flex items-center gap-3 text-start bg-[#176B87] text-white rounded shadow hover:bg-[#1F8EA3]"
      >
        <IoMdNotificationsOutline className="text-xl" />
        <span>Notification</span>
      </button>

      <button 
      onClick={handleHelpAndFAQClick} 
      className="w-full px-4 py-2 flex items-center gap-3 text-start bg-[#176B87] text-white rounded shadow hover:bg-[#1F8EA3]">
        <MdOutlineFindReplace className="text-xl" />
        <span>Help and FAQ</span>
      </button>

      <button
      onClick={termsPrivacypolicyClick}  
      className="w-full px-4 py-2 flex items-center gap-3 text-start bg-[#176B87] text-white rounded shadow hover:bg-[#1F8EA3]">
        <TbReport className="text-xl" />
        <span>Terms and Privacy Policy</span>
      </button>
    </div>
  );
};

export default UserTags;
