import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} width="320px" marginRight="40px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
