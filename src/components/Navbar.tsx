import Link from "./Link";

const links = [{ href: "#about", text: "About" }];

export default function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <ul className="navbar-list">
        {links.map(({ href, text }) => (
          <li key={href} className="navbar-item">
            <Link href={href} target="_self">{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
