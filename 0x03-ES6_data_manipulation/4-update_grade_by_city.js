export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const filteredStudents = studentsList.filter((student) => student.location === city);

  const filteredGrades = newGrades.map((newGrade) => ({ [newGrade.studentId]: newGrade.grade }));

  const ids = filteredGrades.map((newGrade) => Object.keys(newGrade)).flat();
  const idsInteger = ids.map((string) => parseInt(string, 10));

  return filteredStudents.map((student) => {
    const index = idsInteger.indexOf(student.id);
    return {
      ...student,
      grade: index !== -1 ? filteredGrades[index][ids[index]] : 'N/A',
    };
  });
}
