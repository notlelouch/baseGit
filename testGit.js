const Git = require('./git.js');

var repo = new Git("test");
repo.commit("Initial commit");
console.assert(repo.HEAD.name === "master"); // Should be on master branch.

repo.checkout("testing");
console.assert(repo.HEAD.name === "testing"); // Should be on new testing branch.

repo.checkout("master");
console.assert(repo.HEAD.name === "master"); // Should be on master branch.

repo.commit("second commit");
repo.checkout("testing");
console.assert(repo.HEAD.name === "testing"); // Should be on testing branch again.
