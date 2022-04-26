import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const English = Template.bind({});
export const French = Template.bind({});

English.args = {
  id: "header",
  lang: "en",
  altText: "Government of Canada",
  menuProps: {
    dashboardPath: "/examplePath",
    isAuthenticated: true,
    onSignOut: () => {},
    profilePath: "/examplePath",
    securityPath: "/examplePath",
    signOutPath: "/examplePath",
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "/basic-en.html",
    displayAlternateLink: false,
  },
  searchProps: {
    onChange: () => {},
    onSubmit: () => {},
  },
  breadCrumbItems: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Max length of breadcrumb 28", link: "/" },
    { text: "Link3", link: "/" },
  ],
};

French.args = {
  id: "header",
  lang: "fr",
  altText: "Government of Canada",
  menuProps: {
    dashboardPath: "/examplePath",
    isAuthenticated: true,
    onSignOut: () => {},
    profilePath: "/examplePath",
    securityPath: "/examplePath",
    signOutPath: "/examplePath",
  },
  topnavProps: {
    skipToMainPath: "#wb-cont",
    skipToAboutPath: "#wb-info",
    switchToBasicPath: "/basic-fr.html",
    displayAlternateLink: false,
  },
  searchProps: {
    onChange: () => {},
    onSubmit: () => {},
  },
  breadCrumbItems: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Max length of breadcrumb 28", link: "/" },
    { text: "Link3", link: "/" },
  ],
};
