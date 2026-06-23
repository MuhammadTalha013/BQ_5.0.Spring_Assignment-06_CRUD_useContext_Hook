import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentForm() {
  const { addStudent } = useContext(StudentContext);

  const [fullName, setFullName] = useState("");
  const [courseName, setCourseName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !courseName) return;

    addStudent({
      fullName,
      courseName,
    });

    setFullName("");
    setCourseName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />

      <button>Add Student</button>
    </form>
  );
}

export default StudentForm;