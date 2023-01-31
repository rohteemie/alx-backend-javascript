export default function getListStudentIds(arrObj) {
  if (Array.isArray(arrObj)) {
    return arrObj.map((obj) => obj.id);
  }
  return [];
}
