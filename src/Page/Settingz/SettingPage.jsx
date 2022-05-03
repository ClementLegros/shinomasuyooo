import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { ThemeContext } from "../../Components/Theme/ThemeContext";
import React from "react";

const SettingPage = () => {
    const [enabled, setEnabled] = useState()
    const { theme, setTheme } = React.useContext(ThemeContext);

    useEffect(() => {
        //retrieve the theme from the cache stroage
        getDataFromCache();

    }, [])

    async function getDataFromCache() {
        const cachedTheme = await localStorage.getItem("theme");
        console.log("chache storage theme", cachedTheme);
        if (cachedTheme === "enabled") {
            setEnabled(true);
        }
        else {
            setEnabled(false);
        }
    }

    const changeSlider = () => {
        if (enabled) {
            localStorage.setItem("theme", "disabled");
            setEnabled(false)
        }
        else {
            localStorage.setItem("theme", "enabled");
            setEnabled(true)
        }
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className="h-screen">
            <Navbar />
            <div className="flex flex-col items-center">
                <p className="text-3xl underline font-semibold dark:text-gray-500">Setting Page</p>
                <div className="flex flex-row items-center justify-center mt-8">
                    <Switch
                        checked={enabled}
                        onChange={changeSlider}
                        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            aria-hidden="false"
                            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                    </Switch>
                    <p className="text-xl dark:text-gray-500 pl-3">Toggle Light mode</p>
                </div>
            </div>
        </div>
    )
}
export default SettingPage;
