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
  customInlineStyle: {}
};

export const DisabledAndSmallSizeButton = Template.bind({});
DisabledAndSmallSizeButton.args = {
  label: "Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: 'disabled small',
  customInlineStyle: {}
};

export const PrimaryAndSmallSizeButton = Template.bind({});
PrimaryAndSmallSizeButton.args = {
  label: "Small Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: 'primary small',
  customInlineStyle: {}
};

export const PrimaryAndMediumSizeButton = Template.bind({});
PrimaryAndMediumSizeButton.args = {
  label: "Medium Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: 'primary medium',
  customInlineStyle: {}
};

export const PrimaryAndLargeSizeButton = Template.bind({});
PrimaryAndLargeSizeButton.args = {
  label: "Large Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: 'primary large',
  customInlineStyle: {}
}

export const PrimaryButtonWithCustomStyle = Template.bind({});
PrimaryButtonWithCustomStyle.args = {
  label: "Button",
  onClickHandler: ()=> console.log("Button is pressed"),
  className: '',
  customInlineStyle: {
    backgroundColor: 'black',
    width: '70px',
    height: '30px',
    color: '#ffffff'
  }
}
