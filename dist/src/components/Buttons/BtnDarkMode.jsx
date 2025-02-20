import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import {
  DarkModeButton,
  DarkModeButtonIcon,
} from "./Buttons.styled";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
      if (darkMode === 'dark') {
  		document.body.classList.add('dark');
  	} else {
  		document.body.classList.remove('dark');
  	}
  }, [darkMode]);
  

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e) => {
        const newColorScheme = e.matches ? "dark" : "light";
        setDarkMode(newColorScheme); 
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
        mediaQuery.removeEventListener("change", handleChange)
      };
    
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return  (
   
    <DarkModeButton active={darkMode === "dark"} onClick={toggleDarkMode}>
      <DarkModeButtonIcon src={sun} alt="Light mode" />
      <DarkModeButtonIcon src={moon} alt="Dark mode" />
    </DarkModeButton>
  );

};

export default BtnDarkMode;
