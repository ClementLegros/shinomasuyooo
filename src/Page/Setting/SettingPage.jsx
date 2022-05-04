import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { ThemeContext } from "../../Components/Theme/ThemeContext";
import React from "react";

const SettingPage = () => {
  const [themeSliderEnabled, themeSliderSetEnabled] = useState();
  const [previewSliderEnabled, previewSliderSetEnabled] = useState();
  const { theme, setTheme } = React.useContext(ThemeContext);

  useEffect(() => {
    //retrieve the theme from the cache stroage
    getDataFromCache();
  }, []);

  async function getDataFromCache() {
    const cachedTheme = await localStorage.getItem("theme");
    console.log("chache storage theme", cachedTheme);
    //Light mode
    if (cachedTheme === "enabled") {
      themeSliderSetEnabled(true);
    } else {
      themeSliderSetEnabled(false);
    }
    //Preview mode
    const cachedPreview = await localStorage.getItem("preview");
    console.log("chache storage preview", cachedPreview);
    if (cachedPreview === "enabled") {
      previewSliderSetEnabled(true);
    } else {
      previewSliderSetEnabled(false);
    }
  }

  const changeSliderTheme = () => {
    if (themeSliderEnabled) {
      localStorage.setItem("theme", "disabled");
      themeSliderSetEnabled(false);
    } else {
      localStorage.setItem("theme", "enabled");
      themeSliderSetEnabled(true);
    }
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeSliderPreview = () => {
    if (previewSliderEnabled) {
      localStorage.setItem("preview", "disabled");
      previewSliderSetEnabled(false);
    } else {
      localStorage.setItem("preview", "enabled");
      previewSliderSetEnabled(true);
    }
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <p className="text-3xl underline font-semibold dark:text-gray-500">
          Setting Page
        </p>
        {/* Preview mode Switch */}
        <div className="flex flex-row items-center justify-center mt-8">
          <Switch
            checked={themeSliderEnabled}
            onChange={changeSliderTheme}
            className={`${themeSliderEnabled ? "bg-teal-900" : "bg-teal-700"}
                        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="false"
              className={`${
                themeSliderEnabled ? "translate-x-9" : "translate-x-0"
              }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <p className="text-xl dark:text-gray-500 pl-3">Toggle light mode</p>
        </div>
        {/* Preview mode Switch */}
        <div className="flex flex-row items-center justify-center mt-8">
          <Switch
            checked={previewSliderEnabled}
            onChange={changeSliderPreview}
            className={`${previewSliderEnabled ? "bg-teal-900" : "bg-teal-700"}
                        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="false"
              className={`${
                previewSliderEnabled ? "translate-x-9" : "translate-x-0"
              }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <p className="text-xl dark:text-gray-500 pl-3">Card Preview</p>
        </div>
      </div>
    </div>
  );
};
export default SettingPage;
