//include method
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

const result = users.includes({ name: "larry", age: 18 });
console.log(result);

//output
//true