import { useMedia } from '@t4/ui/src'
import { isWeb } from "app/utils/device";

export const useDeviceMedia = () => {
  const media = useMedia()

  const isMobile = media.xs
  const isTablet = media.md
  const isDesktop = media.xl || media.xxl

  const isMobileWeb = isMobile && isWeb
  const isTabletWeb = isTablet && isWeb
  const isDesktopWeb = isDesktop && isWeb

  return { isMobile, isTablet, isDesktop, isMobileWeb, isTabletWeb, isDesktopWeb }
}
