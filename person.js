function Person(race, sex, environment, orientation, peers) {
    this.race = race;
    this.sex = sex;
    this.orientation = orientation;
    this.associateAs = this.develoup(race, sex, environment, peers);
}

Person.prototype.develoup = function(race, sex, environment, peers) {
    if(this.orientation === 'cis') {
        return this.raceCheck(race, sex, environment, peers);
    } else {
        if(this.sex === 'female') {
            sex = 'male';
            return this.raceCheck(race, sex, environment, peers);
        } else {
            sex = 'female';
            return this.raceCheck(race, sex, environment, peers);
        }
    }
};

Person.prototype.raceCheck = function(race, sex, environment, peers) {
    if(peers.race === this.race) {
        return this.combine(race, sex, environment);
    } else {
        race = peers.race;
        return this.combine(race, sex, environment);
    }
};

Person.prototype.combine = function(race, sex, environment) {
    return race + ' ' + sex + ' ' + environment;
};

var bobFriend = {
    race: "white",
    sex: "female",
    environment: "middleclass",
    orientation:  "cis" 
};
var bob = new Person("african", "male", "middleclass", "trans", bobFriend);
bob.associateAs;