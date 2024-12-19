import React, { useState } from "react";
import Switch from "@mui/material/Switch";

const NotificationTags = () => {
  const [settings, setSettings] = useState({
    showNotification: true,
    lockScreenNotification: false,
    allowSound: true,
    allowVibration: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-[#001C30] p-6 mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Notification Settings
      </h2>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <span className="text-white">Show Notifications</span>
          <Switch
            checked={settings.showNotification}
            onChange={() => toggleSetting("showNotification")}
            color="primary"
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white">Lock Screen Notifications</span>
          <Switch
            checked={settings.lockScreenNotification}
            onChange={() => toggleSetting("lockScreenNotification")}
            color="primary"
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white">Allow Sound</span>
          <Switch
            checked={settings.allowSound}
            onChange={() => toggleSetting("allowSound")}
            color="primary"
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white">Allow Vibration</span>
          <Switch
            checked={settings.allowVibration}
            onChange={() => toggleSetting("allowVibration")}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationTags;
