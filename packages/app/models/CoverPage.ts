import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type CoverPageType = {
  title?: string,
  children: (onScroll: (event: any) => void, styles: any) => React.ReactNode,
  colorFrom?: string,
  colorTo?: string,
  imageSrc?: string,
};

export type CoverPageChildrenType = {
  onScroll: (event: any) => void,
  styles: StyleProp<ViewStyle>,
}
