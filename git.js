function Git(name){
    this.name = name; // Repo name
    this.lastCommitID = -1;
}

function Commit(id, message){
    this.id = id;
    this.message = message;
}

Git.prototype.commit = function(id, message){
    var commit = new Commit(++this.lastCommitID, message);
    return commit;
}