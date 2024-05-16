import { View } from "react-native";
import React from "react";
import { LayoutProps } from "../../types/layout";

const Layout = ({ children }: LayoutProps) => {
  return <View>{children}</View>;
};

export default Layout;
