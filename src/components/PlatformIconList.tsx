import type Platform from "@/entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

// const PlatformIconList = ({ platforms }: Props) => {
//   const iconMap: { [key: string]: IconType } = {
//     pc: FaWindows,
//     playstation: FaPlaystation,
//     xbox: FaXbox,
//     nintendo: SiNintendo,
//     mac: FaApple,
//     linux: FaLinux,
//     ios: MdPhoneIphone,
//     web: BsGlobe,
//     android: FaAndroid,
//   };

//   return (
//     <HStack marginY={1}>
//       {platforms.map((platform) => (
//         <Icon
//           key={platform.id}
//           size="md"
//           as={iconMap[platform.slug]}
//           color="gray.500"
//         />
//       ))}
//     </HStack>
//   );
// };

// export default PlatformIconList;

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  if (!platforms?.length) return null; // ⚠️ آرایه خالی یا undefined

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform?.slug]; // guard
        if (!IconComponent) return null; // ⚠️ مهم‌ترین خط
        return (
          <Icon
            key={platform.id}
            size="md"
            as={IconComponent}
            color="gray.500"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
