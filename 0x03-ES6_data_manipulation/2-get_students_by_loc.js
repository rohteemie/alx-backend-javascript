export default function (arrObj, cityName) {
  const result = arrObj.filter((arr) => arr.location === cityName);
  return result;
}
