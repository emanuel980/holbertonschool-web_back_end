export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars
    const innerTask = true;
    // eslint-disable-next-line no-unused-vars
    const innerTask2 = false;
  }

  return [task, task2];
}
