import { createContext, useState } from "react";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global-style";
import { Language } from "./translation/translation";
import { ThemeConfig, darkTheme, lightTheme } from "./theme/theme";
import { ThemeProvider } from "styled-components";

interface LanguageContextInterface {
  language: string;
  changeLanguage?: () => void;
}

export const LanguageContext = createContext<LanguageContextInterface>({
  language: Language.RU,
});

export interface ThemeInterface {
  defaultTheme: ThemeConfig;
  changeTheme?: () => void;
}

export const ThemeContext = createContext<ThemeInterface>({
  defaultTheme: darkTheme,
});

function App() {
  const [language, setLanguage] = useState<string>(Language.RU);
  const [defaultTheme, setDefaultTheme] = useState(darkTheme);

  const changeTheme = () => {
    defaultTheme === darkTheme
      ? setDefaultTheme(lightTheme)
      : setDefaultTheme(darkTheme);
  };

  const changeLanguage = () => {
    language === Language.RU
      ? setLanguage(Language.EN)
      : setLanguage(Language.RU);
  };

  return (
    <div>
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        <ThemeContext.Provider value={{ defaultTheme, changeTheme }}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Header />
          </ThemeProvider>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}
export default App;
