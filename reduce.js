const users = [
  {
    name: "harry",
    age: 19,
  },
  {
    name: "kamaki",
    age: 18,
  },
  {
    name: "saman",
    age: 23,
  },
  { name: "larry", age: 18 },
];

const total = users.reduce((total, user) => {
  return total + user.age;
}, 0);

//explaination
//total = 0
//user = {name: 'harry', age: 19}
//total = 19
//user = {name: 'kamaki', age: 18}
//total = 37
//user = {name: 'saman', age: 23}
//total = 60
//user = {name: 'larry', age: 18}
//total = 78    

//explanation in reduce function in english
//1st call
//total = 0
//user = {name: 'harry', age: 19}
//total = 19