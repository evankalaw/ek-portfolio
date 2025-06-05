import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/evan-kalaw/",
    label: "LinkedIn",
    icon: (
      <FontAwesomeIcon
        icon={faLinkedin}
        size="3x"
        className="text-brand-primary hover:text-brand-accent transition-colors duration-300"
      />
    ),
  },
  {
    href: "https://github.com/evankalaw",
    label: "GitHub",
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        size="3x"
        className="text-brand-primary hover:text-brand-accent transition-colors duration-300"
      />
    ),
  },
  {
    href: "mailto:evan@evankalaw.com",
    label: "Email",
    icon: (
      <FontAwesomeIcon
        icon={faEnvelope}
        size="3x"
        className="text-brand-primary hover:text-brand-accent transition-colors duration-300"
      />
    ),
  },
];

export default function SocialNav() {
  return (
    <div className="flex flex-row space-x-6">
      {socialLinks.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
