import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius={20}
          css={{ "--focus-color": "colors.cyan.600" }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
