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


  //if every user older than 18 it return true
  
  const hasChilderen = users.every((user)=>{
    return user.age > 18
  })

  console.log(hasChilderen);