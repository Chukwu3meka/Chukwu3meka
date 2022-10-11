import { faTwitter, faLinkedinIn, faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

import { Intro } from ".";

const IntroContainer = () => {
  const socialLink = [
    { href: "https://www.github.com/chukwu3meka", icon: faGithub },
    { href: "https://www.twitter.com/chukwu3meka", icon: faTwitter },
    { href: "https://www.linkedin.com/in/chukwu3meka/", icon: faLinkedinIn },
    { href: "https://stackoverflow.com/users/12490386", icon: faStackOverflow },
  ];

  const profilePicStyle = { borderRadius: "50%", overflow: "hidden", width: 200, height: 200, position: "relative" };

  return <Intro socialLink={socialLink} profilePicStyle={profilePicStyle} />;
};

export default IntroContainer;
