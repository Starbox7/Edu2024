import {
  HeaderSection,
  HeaderTitleBox,
  SeparateColumnLine,
} from "./presentation.style";
import Logo from "../kirby/kirby";
import TranslationContainer from "../translation/container";

export default function Presentation() {
  return (
    <HeaderSection>
      <HeaderTitleBox>
        <Logo />
        KirTion
      </HeaderTitleBox>
      <SeparateColumnLine />
      <TranslationContainer />
    </HeaderSection>
  );
}
