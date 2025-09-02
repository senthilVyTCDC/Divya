// src/components/Sidebar.jsx
export default function Sidebar({ isVisible }) {
  return (
    <div id="sidebar" className={`d-md-block ${isVisible ? 'show' : 'd-none'}`} style={{
      width: '220px',
      background: '#2c3e50',
      color: 'white',
      position: 'fixed',
      height: '100vh',
      top: 0,
      left: 0,
      paddingTop: '1rem',
      transition: 'transform 0.3s ease',
      zIndex: 1030
    }}>
      <h3 className="text-center mb-4">Student App</h3>
      <a href="#add" className="d-block px-3 py-2 text-white text-decoration-none">➕ Add Student</a>
      <a href="#list" className="d-block px-3 py-2 text-white text-decoration-none">📋 Student List</a>
    </div>
  );
}
