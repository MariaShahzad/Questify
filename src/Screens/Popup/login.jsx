import React, { Component } from "react";
import {
  Text,
  Input,
  Button,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react";
import {
  centeredpurple,
  inputFieldStyle,
  linkStyle,
  textStyle,
  dividerStyling,
  dividerTextStyling,
  body_Button2,
  body_Button3,
} from "../../Style/Style";
class Login extends Component {
  render() {
    return (
      <Flex flexDirection="column" style={{ textAlign: "center" }} gap="19px">
        <Text style={centeredpurple} mt="4">
          Log In
        </Text>
        <Flex mt="10px" flexDirection="column" gap="10px">
          <Input type="text" placeholder="Email" style={inputFieldStyle} />
          <Input
            type="password"
            placeholder="Password"
            mt="10px"
            style={inputFieldStyle}
          />
          <Flex align="flex-start" justify="flex-start" mt="2">
            <Link href="#" style={linkStyle}>
              Forgot Password?
            </Link>
          </Flex>
          <Button {...body_Button2} mt="4">
            Login
          </Button>
        </Flex>
        <Flex align="center" justify="center" mt="4">
          <Text mr="3" style={textStyle}>
            Not a Questify.com member yet?
          </Text>
          <Link href="#" style={linkStyle}>
            Create an account
          </Link>
        </Flex>
        <Flex align="center" p="4">
          <Divider flex="1" style={dividerStyling} />
          <Text mx="4" style={dividerTextStyling}>
            or
          </Text>
          <Divider flex="1" style={dividerStyling} />
        </Flex>
        <Flex align="center"  justify = "center">
          <Button {...body_Button3}>Sign In with Google</Button>
        </Flex>
      </Flex>
    );
  }
}

export default Login;
