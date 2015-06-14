function Person(race, sex, environment, orientation, peers) {
    this.race = race;
    this.sex = sex;
    this.orientation = orientation;
    this.identifyAs = this.develoup(race, sex, environment, peers);
}

Person.prototype.develoup = function(race, sex, environment, peers) {
    if(this.orientation === 'cis') {
        return this.combine(race, sex, peers.environment);
    } else {
        if(this.sex === peers.sex) {
            return this.raceCheck(race, sex, environment, peers);
        } else {
            sex = peers.sex;
            return this.raceCheck(race, sex, environment, peers);
        }
    }
};

Person.prototype.raceCheck = function(race, sex, environment, peers) {
    if(peers.race === this.race) {
        return this.combine(race, sex, peers.environment);
    } else {
        race = peers.race;
        return this.combine(race, sex, peers.environment);
    }
};

Person.prototype.combine = function(race, sex, environment) {
    return race + ' ' + environment + ' ' + sex;
};

var bobFriend = {
    race: "military",
    sex: "helicopter",
    environment: "attack",
    orientation:  "cis" 
};
var bob = new Person("african", "male", "middleclass", "trans", bobFriend);
bob.identifyAs;
