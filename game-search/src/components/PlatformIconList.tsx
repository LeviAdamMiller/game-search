import { FaWindows, FaPlaystation, FaXbox, FaAndroid, FaApple, FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType, } from 'react-icons';
import { Platform } from "../hooks/useGames";
import { Icon, HStack } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: { [key: string]: IconType } = {
        // name: PlayStation
        // slug: playstation (textual id)
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
