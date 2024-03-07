import React from "react";
import { Paragraph } from "@t4/ui";

export const IconLabel = ({icon, label, color}: { icon: React.ReactNode, label: string, color: string }) => (
  <Paragraph fontWeight='500' color={color}>
    {icon} {label}
  </Paragraph>
)
