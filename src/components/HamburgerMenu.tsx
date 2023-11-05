import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const HamburgerMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem>
          <HStack>
            <Button paddingX={"20px"}>Log in</Button> <Button>Sign up</Button>
          </HStack>
        </MenuItem>
        <Divider paddingY={2} />
        <MenuItem>Products</MenuItem>
        <MenuItem>Deals</MenuItem>
        <MenuItem>Brands</MenuItem>
        <Divider paddingY={2} />
        <MenuItem>about us</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
