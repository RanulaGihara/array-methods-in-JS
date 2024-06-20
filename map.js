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
    }];

    const mappedUsers = users.map((user)=>{
        return user.age * 2
    })

    console.log(mappedUsers);