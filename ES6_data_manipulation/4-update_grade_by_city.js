function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const studentsByCity = students.filter((student) => student.location === city);

  const studentsGraded = studentsByCity.map((student) => {
    const gradeFilter = newGrades.filter((newGrade) => newGrade.studentId === student.id);

    const grade = gradeFilter.length > 0 ? gradeFilter[0].grade : 'N/A';

    return {
      ...student,
      grade,
    };
  });

  return studentsGraded;
}

export default updateStudentGradeByCity;
