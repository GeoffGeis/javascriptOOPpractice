function Sjw(triggers) {
    this.triggers = triggers;
    this.compensation = 0;

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

    this.scanPosts = function(posts) {
        while(this.compensation > 5) {
            for(var i in posts) {
                for(var x in this.triggers) {
                    if(this.triggers[x] === posts[i]) {
                        this.buildCompensation();
                        return console.log(posts[i] + " rly offends me!");
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

var felicia = new Sjw(["these are my base triggers", "right now I am a chill person", "and not heavily compensating"]);
felicia.addTriggers("new things to get upset over", "becoming a ptsd trainwreck", "getting worse", "opinions");
felicia.scanPosts(["other things", "opinions", "other stuff"]);