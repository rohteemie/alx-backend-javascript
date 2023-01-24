export default function createIteratorObject(report) {
  const employeeNames = Object.values(report.allEmployees);
  return employeeNames.map((employeeName) => employeeName).flat();
}
