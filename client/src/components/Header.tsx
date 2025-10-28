import { Link } from "react-router-dom";

export function Header(props: { onMenuToggle: () => void }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}>Mindloop</Link>
      <button onClick={props.onMenuToggle} aria-label="Open menu">☰</button>
    </header>
  );
}