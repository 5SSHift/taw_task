const students = [
  { name: 'Ana', grade: 9 },
  { name: 'Mihai', grade: 7 },
  { name: 'Victor', grade: 4 },
  { name: 'Elena', grade: 10 },
  { name: 'Daniel', grade: 5 },
];

const studentList = document.getElementById('studentList');
const showStudents = document.getElementById('showStudents');
const showPassed = document.getElementById('showPassed');

const searchInput = document.getElementById('searchInput');
const searchStudent = document.getElementById('searchStudent');

function renderStudents(data) {
  studentList.innerHTML = '';

  data.forEach((student) => {
    const card = document.createElement('div');
    card.className = 'student-card';

    card.innerHTML = `
<h3>${student.name}</h3>
<p>Nota: ${student.grade}</p>
`;

    studentList.appendChild(card);
  });
}

function getPassedStudents() {
  return students.filter((student) => student.grade >= 5);
}

function findStudent(name) {
    return students.find(
      (student) => student.name.toLowerCase() === name.toLowerCase(),
    );
  }

function calculateAverage() {
  let total = 0;

  students.forEach((student) => {
    total += student.grade;
  });

  return total / students.length;
}

showStudents.addEventListener('click', () => {
  renderStudents(students);
});

showPassed.addEventListener('click', () => {
  renderStudents(getPassedStudents());
});

searchStudent.addEventListener('click', () => {
  const name = searchInput.value.trim();
  const found = findStudent(name);

  if (found) {
    renderStudents([found]);
  } else {
    studentList.innerHTML = '<p>Elevul nu a fost găsit.</p>';
  }
});

renderStudents(students);

document.getElementById('average').textContent =
  `Media clasei: ${calculateAverage()}`;
