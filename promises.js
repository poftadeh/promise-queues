const queueA = [];
const queueB = [];
const r1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('r1 complete');
    resolve();
  }, 10 * 1000);
});

const r2 = r1.then(() => console.log('r2'));
const r3 = r2.then(() => console.log('r3'));