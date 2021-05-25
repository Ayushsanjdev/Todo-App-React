const getTodos = () => {
  db.collection("todos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
}

const deleteTodos = () => {
  db.collection("todos").doc("")
}