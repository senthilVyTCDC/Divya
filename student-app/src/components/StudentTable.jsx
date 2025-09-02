// src/components/StudentTable.jsx
import { useEffect, useState } from "react";

const apiUrl = "http://localhost:8000/student/";

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });

  const fetchStudents = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setFormData({ name: "", email: "", course: "" });
      fetchStudents();
    } else {
      alert("Failed to add student");
    }
  };

  const deleteStudent = async (id) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`${apiUrl}${id}/`, { method: "DELETE" });
    if (res.ok) fetchStudents();
    else alert("Failed to delete student");
  };

  return (
    <div style={{ marginLeft: "240px", padding: "30px 40px" }}>
      {/* Add Form */}
      <div className="card shadow-sm mb-5" id="add">
        <div className="card-body">
          <h2 className="mb-4">Register New Student</h2>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Enter name" required
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="col-md-4">
              <input type="email" className="form-control" placeholder="Enter email" required
                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Enter course" required
                value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} />
            </div>
            <div className="col-md-1 d-grid">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>

      {/* Table */}
      <div className="card shadow-sm" id="list">
        <div className="card-body">
          <h2 className="mb-4">All Students</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-primary">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.email}</td>
                    <td>{s.course}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(s.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
                {students.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">No students found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
