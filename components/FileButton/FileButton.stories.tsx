import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { FileButton } from "./FileButton";

//👇 This default export determines where your story goes in the story list
export default {
  title: "FileButton",
  component: FileButton,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof FileButton>> = (args) => (
  <FileButton {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
