import { useEffect, useState } from "react";

import "../assets/styles/toggleSwitch.css";

export const Theme = () => {
  const isLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const defaultTheme = isLight ? "light" : "dark";
  const [theme, setTheme] = useState(
    window.localStorage.getItem("ttt-theme") ?? defaultTheme
  );

  const handleChange = (e) => setTheme(e.target.checked ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("ttt-theme", theme);
  }, [theme]);

  return (
    <form className="toggleTheme">
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className="slider round"></span>
        <svg
          viewBox="0 0 24 24"
          version="1.1"
          className="sun"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          xmlSpace="preserve"
        >
          <g id="Environment / Sun">
            <path
              id="Vector"
              d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <svg
          version="1.1"
          className="moon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 49.739 49.739"
          xmlSpace="preserve"
        >
          <path
            d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
              c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
              c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
              C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
              c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
              c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
          />
        </svg>
      </label>
    </form>
  );
};
