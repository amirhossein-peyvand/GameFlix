// import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  components: {
    Card: {
      baseStyle: {
        body: {
          m: 0,   // مارجین جدید
        },
      },
    },
  },
});

export default theme;
function extendTheme(arg0: {
    components: {
        Card: {
            baseStyle: {
                body: {
                    p: number;  
                    m: number;
                };
            };
        };
    };
}) {
    throw new Error("Function not implemented.");
}

