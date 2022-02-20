import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "../components/BrowkUIKit/Icon";

export default {
  title: "Browk-UI-Kit/Icon",
  component: Icon,
  argTypes: {
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
Template.parameters = { pseudo: { hover: true } }

export const DefaultAndSmallSizeIcon = Template.bind({});
DefaultAndSmallSizeIcon.args = {
  size: "30px",
  viewBox: "0 0 16 16",
  color: 'black',
  className: '',
  icon: "loader_xs",
  style: {}
};

export const IconWithCustomStyle = Template.bind({});
IconWithCustomStyle.args = {
  size: "30px",
  viewBox: "0 0 16 16",
  color: "white",
  className: '',
  icon: "checked_xs",
  style: {
    background: "black",
  }
}