const findTheOldest = function (people) {
  const getAge = (person) => {
    if (!person.yearOfDeath)
      return new Date().getFullYear() - person.yearOfBirth;

    return person.yearOfDeath - person.yearOfBirth;
  };

  const oldestPerson = people.reduce((oldestPerson, person) => {
    if (getAge(oldestPerson) > getAge(person)) {
      return oldestPerson;
    } else {
      return person;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
