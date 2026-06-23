import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentCard({ student }) {
  const { deleteStudent, updateStudent } =
    useContext(StudentContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(student.fullName);
  const [editedCourse, setEditedCourse] = useState(
    student.courseName
  );

  const saveChanges = () => {
    updateStudent({
      ...student,
      fullName: editedName,
      courseName: editedCourse,
    });

    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />

          <input
            value={editedCourse}
            onChange={(e) => setEditedCourse(e.target.value)}
          />

          <button onClick={saveChanges}>
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{student.fullName}</h3>
          <p>{student.courseName}</p>

          <button
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>

          <button
            onClick={() =>
              deleteStudent(student.id)
            }
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default StudentCard;