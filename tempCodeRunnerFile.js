;(function() {
    function Git(name){
        this.name = name; // Repo name
        this.lastCommitID = -1;
        this.HEAD = null; // Reference to last Commit.
        this.branches = []; 

        var master = new Branch("master", null); 
        this.branches.push(master);

        this.HEAD = master;             

    }

    function Commit(id, parent, message){
        this.id = id;
        this.parent = parent;
        this.message = message;
    }

    function Branch(name, commit){
        this.name = name;
        this.commit = commit;   
    }

    Git.prototype.commit = function(message) {
        var commit = new Commit(++this.lastCommitID, this.HEAD, message);
        this.HEAD.commit = commit;
        
        return commit;
    }

    // Git.prototype.log = function() {
    //     var history = []; // array of commits in reverse order.  
    //     // 1. Start from last commit
    //     // 2. Go back tracing to the first commit
    //     // 3. Push in `history`

    // Git.prototype.log = function() {
    //     // Start from HEAD
    //     var commit = this.HEAD,
    //       history = [];
      
    //     while (commit) {
    //       history.push(commit);
    //       // Keep following the parent
    //       commit = commit.parent;
    //     }
    Git.prototype.log = function() {
        // Start form the Head commit
        let commit = this.HEAD.commit;
        history = [];


    }

    Git.prototype.checkout = function(branchName) {
        // If the branch already exists
        for (let i = this.branches.length - 1; i--; ){
            if (this.branches[i].name === branchName) {
                console.log("Swithced to an existing branch" + branchName);
            }
            this.HEAD = this.branches[i];
            return this;
        }

        // If the branch does not exist, then create a new one
        var newBranch = new Branch(branchName, this.HEAD.commit);
        // Store the new branch
        this.branches.push(newBranch);
        // Update the HEAD
        this.HEAD = newBranch;

        console.log("Swithced to a new branch" + branchName);
        return this;
    }

    // TEST
    console.log("Git.checkout() test");
    var repo = new Git("test");
    repo.commit("Initial commit");

    console.assert(repo.HEAD.name === "master"); // Should be on master branch.
    repo.checkout("testing");
    console.assert(repo.HEAD.name === "testing"); // Should be on new testing branch.
    repo.checkout("master");
    console.assert(repo.HEAD.name === "master"); // Should be on master branch.
    repo.checkout("testing");
    console.assert(repo.HEAD.name === "testing"); // Should be on testing branch again.

  //  window.Git = Git;

    ;})();