export function waitFor(msec, cb) {
  return new Promise(resolve => {
    setTimeout(() => resolve(cb && cb()), msec);
  });
}
