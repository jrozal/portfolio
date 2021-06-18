import React from 'react';
import { GithubIcon, EmailIcon, LinkedInIcon } from '../images/icons';

export const socialData = [
  {
    icon: <GithubIcon/>,
    values: {
      href: "https://github.com/jrozal",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Open Github profile for Justin Rozal"
    },
    className: "github"
  },
  {
    icon: <EmailIcon/>,
    values: {
      href: "mailto:test@test.com",
      ariaLabel: "Send mail to test@test.com"
    },
    className: "email"
  },
  {
    icon: <LinkedInIcon/>,
    values: {
      href: "https://www.linkedin.com/in/jrozal/",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Open LinkedIn profile for Justin Rozal"
    },
    className: "linkedin"
  },
];