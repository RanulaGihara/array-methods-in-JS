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
  
  //this will return the first object 
  const filterUsers = users.find((user) => {
    return user.name === "larry";
  });
  
  console.log(filterUsers);