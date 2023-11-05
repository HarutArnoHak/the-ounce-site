import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";

import HamburgerMenu from "./HamburgerMenu";
import ounceLogo from "../assets/ounceLogo.webp";
//import { ColorModeSwitch } from "./ColorModeSwitch";
//import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Show below="lg">
          <HamburgerMenu />
        </Show>

        <VStack marginX={70}>
          <Box boxSize={100}>
            <Image
              alt="the Ounce Logo"
              borderRadius={"10px"}
              src={ounceLogo}
              width={120}
            />
          </Box>
          {/* <Text fontSize="md">Dispensary</Text> */}
        </VStack>
        {/* <SearchInput onSearch={onSearch}></SearchInput> */}
      </HStack>
      <Divider />
    </>
  );
};

export default NavBar;
