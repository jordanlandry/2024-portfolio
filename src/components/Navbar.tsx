import Link from "./Link";
import "./navbar.scss";

const links = [
  { href: "#home", text: "Home", icon: "favicon.ico" },
  { href: "#about", text: "About" },
  { href: "#work", text: "Work" },
  { href: "#projects", text: "Projects" },
  { href: "#contact", text: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <ul className="navbar-list">
        {links.map(({ href, text, icon }) => (
          <li key={href} className="navbar-item">
            <Link href={href} target="_self">
              {icon ? <img src={icon} alt={text} /> : null}
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
