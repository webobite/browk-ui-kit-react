import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/BrowkUIKit/Button";
import Icon from "../components/BrowkUIKit/Icon";

export default {
  title: "Browk-UI-Kit/ButtonWithIcons",
  component: Button,
  argTypes: {
    onClickHandler: { onClick: { action: "clicked" } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <Icon
      size="24px"
      viewBox={"0 0 16 16"}
      color={"white"}
      icon={"loader_xs"}
      className={""}
      style={{
        margin: "5px"
      }}
    ></Icon>
  </Button>
);
Template.parameters = { pseudo: { hover: true } };

export const PrimaryAndSmallSizeButton = Template.bind({});
PrimaryAndSmallSizeButton.args = {
  label: "",
  onClickHandler: () => console.log("Button is pressed"),
  className: "primary small no-border",
  customInlineStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px"
  },
};

export const DisabledAndSmallSizeButton = Template.bind({});
DisabledAndSmallSizeButton.args = {
  label: "",
  onClickHandler: () => console.log("Button is pressed"),
  className: "disabled small no-border",
  customInlineStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px"
  },
};

export const IconWithLabelAndSmallSizeButton = Template.bind({});
IconWithLabelAndSmallSizeButton.args = {
  label: "Button",
  onClickHandler: () => console.log("Button is pressed"),
  className: "primary small no-border",
  customInlineStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px"
  },
};

export const IconWithLabelAndSmallSizeDisabledButton = Template.bind({});
IconWithLabelAndSmallSizeDisabledButton.args = {
  label: "Button",
  onClickHandler: () => console.log("Button is pressed"),
  className: "disabled small no-border",
  customInlineStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px"
  },
};

export const SquareButtonWithIcon = Template.bind({});
SquareButtonWithIcon.args = {
  onClickHandler: () => console.log("Button is pressed"),
  className: "primary square no-boder",
  customInlineStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export const SquareDisabledButtonWithIcon = Template.bind({});
SquareDisabledButtonWithIcon.args = {
  onClickHandler: () => console.log("Button is pressed"),
  className: "disabled square no-boder",
  customInlineStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};


export const CircleButtonWithIcon = Template.bind({});
CircleButtonWithIcon.args = {
  onClickHandler: () => console.log("Button is pressed"),
  className: "primary circle no-border",
  customInlineStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export const CircleDisabledButtonWithIcon = Template.bind({});
CircleDisabledButtonWithIcon.args = {
  onClickHandler: () => console.log("Button is pressed"),
  className: "disabled circle no-border",
  customInlineStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};