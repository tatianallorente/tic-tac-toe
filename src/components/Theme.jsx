import { useEffect, useState } from "react";

import "../assets/styles/toggleSwitch.css";

export const Theme = () => {
  const [theme, setTheme] = useState("light");

  const handleChange = (e) => setTheme(e.target.checked ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="toggleTheme">
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
