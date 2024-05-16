import { StyleSheet, Text } from "react-native";
import React from "react";
import { CustomTextProps } from "../../../../types/layout";
import theme from "../../../../theme";

const CustomText = ({
  children,
  title,
  subTitle,
  small,
  bold,
}: CustomTextProps) => {
  const textStyles = [
    styles.default,
    title && styles.title,
    subTitle && styles.subTitle,
    small && styles.small,
    bold && styles.bold,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontSize: theme.fontSizes.body,
  },

  title: {
    fontSize: theme.fontSizes.title,
  },

  subTitle: {
    fontSize: theme.fontSizes.subTitle,
  },

  small: {
    fontSize: theme.fontSizes.small,
  },

  bold: {
    fontWeight: "bold",
  },
});

export default CustomText;
