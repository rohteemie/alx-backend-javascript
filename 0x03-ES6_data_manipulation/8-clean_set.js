export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) return '';

  const filteredList = [...set].filter((word) => word && word.startsWith(startString));

  return filteredList.map((word) => word.slice(startString.length)).join('-');
}
