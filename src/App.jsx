import User from "./components/User";
function App() {
  const user={
    name: "Sehrish",
    age: 20,
    dateOfBirth: "02 September 2005",
    city: "Chakwal",
    email: "sehrmaqbool@gmail.com",
  };
  return (
    <>
      <User user={user} />
    </>
  );
}

export default App;