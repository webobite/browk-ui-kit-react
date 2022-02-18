import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/BrowkUIKit/Button";

export default {
  title: "Browk-UI-Kit/Button",
  component: Button,
  argTypes: {
    onClickHandler: { onClick: { action: 'clicked' } }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Template.parameters = { pseudo: { hover: true } }

export const DefaultAndSmallSizeButton = Template.bind({});
DefaultAndSmallSizeButton.args = {
  label: "Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: 'default small',
  buttonStyle: {}
};

export const PrimaryAndSmallSizeButton = Template.bind({});
PrimaryAndSmallSizeButton.args = {
  label: "Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: 'primary small',
  buttonStyle: {}
};

export const PrimaryAndMediumSizeButton = Template.bind({});
PrimaryAndMediumSizeButton.args = {
  label: "Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: 'primary medium',
  buttonStyle: {}
};

export const PrimaryAndLargeSizeButton = Template.bind({});
PrimaryAndLargeSizeButton.args = {
  label: "Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: 'primary large',
  buttonStyle: {}
}

export const PrimaryButtonWithCustomStyle = Template.bind({});
PrimaryButtonWithCustomStyle.args = {
  label: "Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: '',
  buttonStyle: {
    backgroundColor: 'black',
    width: '70px',
    height: '30px',
    color: '#ffffff'
  }
}