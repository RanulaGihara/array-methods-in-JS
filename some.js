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


  //if theres at least one user older than 18 it return true
  
  const hasChilderen = users.some((user)=>{
    return user.age > 18
  })

  console.log(hasChilderen);