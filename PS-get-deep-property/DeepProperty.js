function getDeepProperty(obj, path) {
  var paths = path.split('.');
    current = obj;
    

  for (var i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}
const someObj = {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName'}}};

console.log(getDeepProperty(someObj, 'person.name.lastName'));
