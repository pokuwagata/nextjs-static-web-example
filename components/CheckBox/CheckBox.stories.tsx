import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { CheckBox } from "./CheckBox";

//👇 This default export determines where your story goes in the story list
export default {
  title: "CheckBox",
  component: CheckBox,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof CheckBox>> = (args) => (
  <CheckBox {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};
