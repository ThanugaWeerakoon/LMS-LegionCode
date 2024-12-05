import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import UserProfileEdit from "./UserProfileEdit";
import UserTags from "./UserTags";

const UserProfile = () => {
  const [user, setUser] = useState({
    avatar: "https://via.placeholder.com/200",
    name: "Legion Code",
    email: "Legion@example.com",
    bio: "Software Engineer | Tech Enthusiast | Lifelong Learner",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (updatedData) => {
    setUser(updatedData);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser) => ({
        ...prevUser,
        avatar: imageUrl,
      }));
      localStorage.setItem("userAvatar", imageUrl);
    }
  };

  return (
    <div className="bg-[#001C30] max-w-4xl mx-auto rounded-lg">
      <div className="flex flex-col lg:flex-row items-center gap-20 relative">
        <div className="flex-shrink-0">
          <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg relative">
            <label className="cursor-pointer block">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </label>
          </div>
        </div>

        <div className="flex-grow">
          {!isEditing ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                {user.name}
                <button
                  onClick={handleEdit}
                  className="ml-auto text-[#FFC700] hover:text-[#E0B200]"
                >
                  <FaRegEdit size={20} />
                </button>
              </h2>
              <p className="text-white mb-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-[#FFC700]">
                <strong>Bio:</strong> {user.bio}
              </p>
            </div>
          ) : (
            <UserProfileEdit
              userData={user}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}
        </div>
      </div>
      <UserTags />
    </div>
  );
};

export default UserProfile;
