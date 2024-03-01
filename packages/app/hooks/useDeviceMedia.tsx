import { useMedia } from "@t4/ui/src";

export const useDeviceMedia = () => {
  const media = useMedia()

  const isMobile = media.xs;
  const isTablet = media.md;
  const isDesktop = media.xl;

  return { isMobile, isTablet, isDesktop };
};
