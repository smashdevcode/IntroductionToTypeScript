
function MyFunction(callback: (parameter1: string) => void) {
  if (callback) {
    callback('Hello from MyFunction');
  }
}

MyFunction(function (value) {
  alert(value);
});
