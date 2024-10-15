import { useContext, useEffect, useRef } from "react";
import Link from "./Link";
import "./navbar.scss";
import { NavHeightContext } from "../context";
import useBoundingClientRect from "../hooks/useBoundingClientRect";

const links = [
  { href: "#home", text: "Home", icon: "favicon.ico" },
  { href: "#about", text: "About" },
  { href: "#work", text: "Work" },
  { href: "#projects", text: "Projects" },
  { href: "#contact", text: "Contact" },
];

export default function Navbar() {
  const { setNavHeight } = useContext(NavHeightContext);

  const navRef = useRef<HTMLDivElement>(null);
  const rect = useBoundingClientRect({
    elementRef: navRef,
    events: ["load", "resize"],
  });

  useEffect(() => {
    if (rect) setNavHeight(rect.height);
  }, [rect]);

  return (
    <nav className="navbar-wrapper" ref={navRef}>
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
