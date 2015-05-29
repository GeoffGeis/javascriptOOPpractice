function Sjw(triggers, confBias) {
    this.triggers = triggers;
    this.compensation = 0;
    this.confirmationBias = confBias;

    this.buildCompensation = function() {
        this.compensation = 0;
        if(this.triggers) {
            for(var i in this.triggers) {
                this.compensation += 1;
            }
        }
    };

    this.buildCompensation();

    this.addTriggers = function() {
        for(var i = 0; i < arguments.length; i++) {
            if(this.triggers) {
                this.triggers.push(arguments[i]);
                this.compensation += 1;
            } else {
                this.triggers = [];
                this.triggers.push(arguments[i]);
                this.compensation += 1;
            }
        }
    };
    
    this.sanatizePosts = function(posts) {
        for(var i in posts) {
            for(var x in this.confirmationBias) {
                if(posts[i] === this.confirmationBias[x]) {
                    posts.splice(i, 1);
                }
            }
        }
        return posts;
    };

    this.scanPosts = function(posts) {
        var output = this.sanatizePosts(posts);
        while(this.compensation > 5) {
            for(var i in output) {
                for(var x in this.triggers) {
                    if(this.triggers[x] === output[i]) {
                        this.buildCompensation();
                        return console.log(posts[i] + " give me ptsd!");
                    } else {
                        this.compensation -= 1;
                    }
                }
            }
        }
        console.log("I don't have ptsd today");
        this.buildCompensation();
    };
}

var socJusBob = new Sjw(["these are my base triggers", "right now I am a chill person", "and not heavily compensating"], ["crazy ideas", "more crazy ideas"]);
socJusBob.addTriggers("new things to get upset over", "becoming a ptsd trainwreck", "getting worse", "opinions");
socJusBob.scanPosts(["other things", "opinions", "other stuff", "crazy ideas", "more crazy ideas"]);