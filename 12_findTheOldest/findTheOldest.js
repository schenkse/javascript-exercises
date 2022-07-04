const findTheOldest = function(people) {
    const peopleByAge = people.sort(function(a, b) {
        let agePrevPerson = a.yearOfBirth;
        let ageNextPerson = b.yearOfBirth;
        if (a.yearOfDeath === undefined) {
            agePrevPerson -= new Date().getFullYear();
        } else {
            agePrevPerson -= a.yearOfDeath;
        }
        if (b.yearOfDeath === undefined) {
            ageNextPerson -= new Date().getFullYear();
        } else {
            ageNextPerson -= b.yearOfDeath;
        }
        return ageNextPerson >= agePrevPerson ? -1 : 1;
    });
    return peopleByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
