export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disabled no-unused-vars */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* eslint-enabled no-unused-vars */
  return [task, task2];
}
