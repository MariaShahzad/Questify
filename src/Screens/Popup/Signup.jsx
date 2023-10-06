import React, { Component } from "react";
import { Text, Input, Button, Link, Flex } from "@chakra-ui/react";
import {
  body_Button2,
  body_Button3,
  centeredpurple,
  inputFieldStyle,
  linkStyle,
  loginButtonStyle,
  textStyle,
} from "../../Style/Style";

class SignIn extends Component {
  render() {
    return (
      <Flex
        flexDirection="column"
        style={{ textAlign: "center" }}
        gap="19px"
        px="20px"
      >
        <Text style={centeredpurple} mt="4">
          Create Account
        </Text>

        <Flex mt="10px" flexDirection="column" gap="15px">
          <Input
            type="text"
            placeholder="Name"
            style={inputFieldStyle}
          />
          <Input
            type="text"
            placeholder="Email"
            style={inputFieldStyle}
          />
          <Input
            type="password"
            placeholder="Password"
            style={inputFieldStyle}
          />

          <Button {...body_Button2} mt="4">
            Create Account
          </Button>
        </Flex>
        <Flex align="center" justify="center" mt="4">
          <Text mr="3" style={textStyle}>
            Already a member?
          </Text>
          <Link href="#" style={linkStyle}>
            Log In
          </Link>
        </Flex>
      </Flex>
    );
  }
}

export default SignIn;
