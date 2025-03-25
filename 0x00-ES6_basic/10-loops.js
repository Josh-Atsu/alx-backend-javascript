export default function appendToEachArrayValue(array, appendString) {
  const arrayAppend = []
 for (const value of array) {
   arrayAppend.push(`${appendString}${value}`);
 }

  return arrayAppend;
}
