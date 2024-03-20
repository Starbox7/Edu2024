import { Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

//hooks
import useRegister from "./hook";

import {
  AuthSection,
  Content,
  Title,
  Input,
  Description,
  Signup,
  SeparateRowLine,
  Social,
  Image,
  Help,
  HelpText,
  Valid,
} from "./presentation.style";

import { Apple, Google, Kakao } from "../../assets/noticon";
import HeaderContainer from "../common/header/container";

export default function SignInPresentation() {
  const {
    onChangeEmail,
    validEmail,
    onChangePassword,
    validPassword,
    onChangeConfirm,
    validConfirm,
    signup,
  } = useRegister();

  return (
    <AuthSection>
      <HeaderContainer />
      <Content>
        <Title>Register</Title>
        <Input label="E-Mail" size="small" onChange={onChangeEmail} />
        {!validEmail && (
          <Valid>
            <FontAwesomeIcon
              icon={faShieldHalved}
              style={{ marginRight: "3px" }}
            />
            Invalid email format. Please try again.
          </Valid>
        )}
        <Input
          label="Password"
          size="small"
          type="password"
          onChange={onChangePassword}
        />
        {!validPassword && (
          <Valid>
            <FontAwesomeIcon
              icon={faShieldHalved}
              style={{ marginRight: "3px" }}
            />
            Your password must be at least 8 characters long and include at
            least one uppercase letter, one lowercase letter, one number, and
            one special character.
          </Valid>
        )}
        <Input
          label="Confirm Password"
          size="small"
          type="password"
          onChange={onChangeConfirm}
        />
        {!validConfirm && (
          <Valid>
            <FontAwesomeIcon
              icon={faShieldHalved}
              style={{ marginRight: "3px" }}
            />
            Password does not match
          </Valid>
        )}
        <Description>
          Use an organization email to easily collaborate with teammates
        </Description>
        <Signup
          variant="contained"
          onClick={() => {
            signup();
          }}
        >
          Continue
        </Signup>
        <SeparateRowLine />
        <Social variant="outlined">
          <Image src={Google} alt="" />
          Continue with Google
        </Social>
        <Social variant="outlined">
          <Image src={Kakao} alt="" />
          Continue with Kakao
        </Social>
        <Social variant="outlined">
          <Image src={Apple} alt="" />
          Continue with Apple ($99)
        </Social>
        <Help>
          <HelpText>have an account?</HelpText>
          <Link href="/signin">Go to Sign in</Link>
        </Help>
      </Content>
    </AuthSection>
  );
}
