import styled from "styled-components";
import { Button } from "../button";
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../../App";
import { translation } from "../../translation/translation";

const Wrapper = styled.header`
  display: flex;
  justify-content: end;
  gap: 20px;
  margin: 48px;
`;

export const Header = () => {
  const languageContext = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);
  return (
    <Wrapper>
      <Button
        onClick={languageContext.changeLanguage}
        text={translation(languageContext.language, "language")} />
      <Button
        onClick={themeContext.changeTheme}
        text={translation(languageContext.language, "theme")} />
    </Wrapper>
  );
};
