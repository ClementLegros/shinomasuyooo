import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { ThemeContext } from "../../Components/Theme/ThemeContext";
import React from "react";



const SettingPage = () => {
    const [enabled, setEnabled] = useState(false)
    const { theme, setTheme } = React.useContext(ThemeContext);

    useEffect(() => {
        if(enabled)
        {
            setTheme(theme === "dark" ? "light" : "dark")
            console.log("enabled");
        }
        else{
            setTheme(theme === "light" ? "dark" : "dark")

            console.log("disabled");
        }
    }, [enabled])



    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center">
                <p className="text-3xl underline font-semibold">Setting Page</p>
                <div className="flex flex-row items-center justify-center mt-5">
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
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
                    <p className="text-xl">Toggle dark mode</p>
                </div>
            </div>
            <div>
                <p className="dark:text-white">
                    test
                </p>
            </div>
        </div>
    )
}
export default SettingPage;