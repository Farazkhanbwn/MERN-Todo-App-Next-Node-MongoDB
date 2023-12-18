export const displayUserData = async () => {
  try {
    let userData = await fetch("http://localhost:3000/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });
    console.log("userData is ", userData);

    return userData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
