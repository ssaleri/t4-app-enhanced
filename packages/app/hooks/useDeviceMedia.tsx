import { useMedia } from "@t4/ui/src";
import { Platform } from "react-native";

export const useDeviceMedia = () => {
  const media = useMedia()
  const isWeb = Platform.OS === "web";

  const isMobile = media.xs;
  const isTablet = media.md;
  const isDesktop = media.xl || media.xxl;

  const isMobileWeb = isMobile && isWeb;
  const isTabletWeb = isTablet && isWeb;
  const isDesktopWeb = isDesktop && isWeb;

  return { isMobile, isTablet, isDesktop, isMobileWeb, isTabletWeb, isDesktopWeb };
};
