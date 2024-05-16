import React from "react";
import CustomText from "../../Custom/CustomText/CustomText";
import { Link } from "react-router-native";
import { AppBarProps } from "../../../types/appBar";
import { TouchableWithoutFeedback } from "react-native";

const AppBarTab = ({ children, to, active }: AppBarProps) => {
  return (
    <Link to={to}>
      <CustomText subTitle>{children}</CustomText>
    </Link>
  );
};

export default AppBarTab;
