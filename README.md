[![progress-banner](https://backend.codecrafters.io/progress/git/7cf1e9ba-3f46-4182-aecb-803f76da92cb)](https://app.codecrafters.io/users/notlelouch2?r=2qF)

# baseGit

Meet baseGit, a lightweight Git implementation in JavaScript that provides a simplified version of Git functionality for educational purposes. It allows you to create repositories, branches, commit changes, and switch between branches.

## Features

- **Repository Management:** Generate secure public-private key pairs for wallet management.
- **Committing Changes:** Sign and verify transactions securely using cryptographic functions.
- **Branching and Checkout:** Mine blocks with proof-of-work and validate transactions for added security.

## Installation 

Clone the repository to your local machine:

   ```bash
    git clone https://github.com/<your-username>/baseGit.git
   ```

Navigate to the project directory:

   ```bash
    cd baseGit
   ```

## Usage

To use baseGit in your project, include the git.js file:

``` javascript
const Git = require('./git.js');

// Create a new repository
const repo = new Git("myRepo");

// Commit changes
const firstCommit = repo.commit("Initial commit");

// Create and switch to a new branch
repo.checkout("feature-branch");

// Commit changes on the new branch
const secondCommit = repo.commit("Implement feature");

// Switch back to the master branch
repo.checkout("master");
```

## Examples

Check the functionality of baseGit using the provided testGit.js file:

```javascript
const Git = require('./git.js');

const repo = new Git("test");
repo.commit("Initial commit");
console.assert(repo.HEAD.name === "master"); // Should be on master branch.

repo.checkout("testing");
console.assert(repo.HEAD.name === "testing"); // Should be on the new testing branch.

repo.checkout("master");
console.assert(repo.HEAD.name === "master"); // Should be on the master branch.

repo.commit("second commit");
repo.checkout("testing");
console.assert(repo.HEAD.name === "testing"); // Should be on the testing branch again.
```

## Contributing

Contributions are welcome! If you have ideas for improvements, new features, or bug fixes, please open an issue or submit a pull request.
