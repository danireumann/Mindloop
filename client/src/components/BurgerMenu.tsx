import { Link } from "react-router-dom";

export function BurgerMenu(props: { open: boolean; onClose: () => void }) {
  if (!props.open) return null;
  return (
    <nav style={{ position: "absolute", right: 12, top: 56, background: "white", border: "1px solid #eee", borderRadius: 8, padding: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <li><Link to="/" onClick={props.onClose}>Home</Link></li>
        <li><Link to="/history" onClick={props.onClose}>History</Link></li>
      </ul>
    </nav>
  );
}