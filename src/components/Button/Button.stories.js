import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

import btnIcon from "../../assets/plus.svg";

const Template = (args) => <Button {...args} />;

export const Supertask = Template.bind({});
export const SupertaskIcon = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const DangerDisabled = Template.bind({});
export const Link = Template.bind({});

Supertask.args = {
  id: "supertask",
  styling: "supertask",
  text: "Supertask button",
  iconAltText: "supertask",
};

SupertaskIcon.args = {
  id: "supertask_icon",
  styling: "supertask",
  text: "Supertask button",
  icon: btnIcon,
  iconAltText: "icon",
  iconEnd: false,
};

Primary.args = {
  id: "primary",
  text: "Primary button",
  iconAltText: "prime",
  styling: "primary",
};

Secondary.args = {
  id: "secondary",
  text: "Secondary Button",
  iconEnd: false,
  secondary: true,
  styling: "secondary",
};

DangerDisabled.args = {
  id: "danger",
  text: "Danger Button",
  styling: "danger",
  disabled: true,
  iconAltText: "disabled",
};

Link.args = {
  id: "link",
  text: "Link Button",
  styling: "link",
  href: "/",
  iconAltText: "link",
};
