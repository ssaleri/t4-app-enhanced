import { useMedia } from "@t4/ui/src";
import { Platform } from "react-native";

export const useDeviceMedia = () => {
  const media = useMedia()
  const isWeb = Platform.OS === "web";

  const isMobile = media.xs;
  const isTablet = media.md;
  const isDesktop = media.xl;

  const isMobileWeb = media.xs && isWeb;
  const isTabletWeb = media.md && isWeb;
  const isDesktopWeb = media.xl && isWeb;

  return { isMobile, isTablet, isDesktop, isMobileWeb, isTabletWeb, isDesktopWeb };
};
