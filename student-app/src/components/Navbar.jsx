// src/components/Navbar.jsx
export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar sticky-top" style={{ background: "#2c3e50" }}>
      <div className="container-fluid">
        <span id="sidebarToggle" className="d-md-none" onClick={toggleSidebar} style={{ color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>&#9776;</span>
        <a className="navbar-brand" href="#" style={{ color: 'white', fontWeight: '600', fontSize: '1.4rem' }}>Student App</a>
      </div>
    </nav>
  );
}
