//generate me a array object which has name and age


const users = [
  {
    name: "harry",
    age: 19,
  },
  {
    name: "larry",
    age: 18,
  },
  {
    name: "larry",
    age: 18,
  },
  { name: "larry", age: 18 },
];

const filterUsers = users.filter((user) => {
  return user.age > 18;
});

console.log(filterUsers);