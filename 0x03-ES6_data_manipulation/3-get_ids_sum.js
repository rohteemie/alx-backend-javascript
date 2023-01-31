export default function (studentsList) {
  return studentsList.reduce( (prev, next) => (prev + next.id), 0);
}
