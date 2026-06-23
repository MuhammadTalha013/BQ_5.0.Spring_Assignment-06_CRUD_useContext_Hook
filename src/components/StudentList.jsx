import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "./StudentCard";

function StudentList() {
  const { students } = useContext(StudentContext);

  return (
    <div>
      {students.length === 0 ? (
        <p>No Students Found</p>
      ) : (
        students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))
      )}
    </div>
  );
}

export default StudentList;