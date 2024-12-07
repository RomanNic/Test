export function doSomething(condition, callback) {
  if (condition) {
    callback("Success!");
  } else {
    callback("Failure!");
  }
}
