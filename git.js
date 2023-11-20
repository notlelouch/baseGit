;(function() {
    function Git(name){
        this.name = name; // Repo name
        this.lastCommitID = -1;
    }

    function Commit(id, message){
        this.id = id;
        this.message = message;
    }

    Git.prototype.commit = function(message){
        var commit = new Commit(++this.lastCommitID, message);
        return commit;
    }

    window.Git = Git;

;})();