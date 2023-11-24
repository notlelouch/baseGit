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

    Git.prototype.log = function() {
        // Start form the Head commit
        let commit = this.HEAD.commit;
        history = [];

        while(commit) {
            history.push(commit);
            // Keep following the parent
            commit = commit.parent;
        }
    }

    Git.prototype.checkout = function(branchName) {
        // If the branch already exists
        for (let i = 0; i < this.branches.length; i++){
            if (this.branches[i].name === branchName) {
                console.log("Swithced to an existing branch " + branchName);
                
                this.HEAD = this.branches[i];
                return this;
            }
            
        }

        // If the branch does not exist, then create a new one
        var newBranch = new Branch(branchName, this.HEAD.commit);
        // Store the new branch
        this.branches.push(newBranch);
        // Update the HEAD
        this.HEAD = newBranch;

        console.log("Swithced to a new branch " + branchName);
        return this;
    }

    module.exports = Git;

    ;})();