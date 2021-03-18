import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { WindowIcon } from "./WindowIcon";

export default {
  title: "WindowIcon",
  component: WindowIcon,
};

const Template: Story<ComponentProps<typeof WindowIcon>> = (args) => (
  <WindowIcon {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  text: "hoge",
};
