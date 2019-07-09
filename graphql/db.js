export const people = [
  {
    id: "0",
    name: "jin",
    age: 35,
    gender: "male"
  },
  {
    id: "2",
    name: "test",
    age: 12,
    gender: "male"
  },
  {
    id: "2",
    name: "qwer",
    age: 34,
    gender: "female"
  },
  {
    id: "3",
    name: "dfgh",
    age: 56,
    gender: "male"
  },
  {
    id: "4",
    name: "ertyu",
    age: 21,
    gender: "female"
  },

]

export const getById = id => {
  const filteredPeople = people.filter(person => id === people.id);
  return filteredPeople[0];
}
