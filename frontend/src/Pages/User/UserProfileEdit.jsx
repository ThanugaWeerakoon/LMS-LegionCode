import React, { useState } from "react";

const UserProfileEdit = ({ userData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-white mb-6" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-[#1A3A4F] text-white border border-gray-600"
        />
      </div>

      <div>
        <label className="block text-white mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 rounded bg-[#1A3A4F] text-white border border-gray-600"
        />
      </div>

      <div>
        <label className="block text-white mb-2" htmlFor="bio">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          rows="4"
          className="w-full p-2 rounded bg-[#1A3A4F] text-white border border-gray-600"
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
        >
          Cancel
        </button>
        <button
          onClick={() => onSave(formData)}
          className="px-4 py-2 bg-[#FFC700] text-black rounded hover:bg-[#E0B200]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UserProfileEdit;
