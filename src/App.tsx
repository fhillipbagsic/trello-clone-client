import Container from "./Components/Container";
import Controls from "./Components/ControlComponents/Controls";
import NavBar from "./Components/NavBar";
import Signin from "./Components/SigninComponents/Signin";

function App() {
  const alreadySignedIn = localStorage.getItem("name") || null;

  console.log(alreadySignedIn);
  return (
    <>
      <NavBar />
      <Controls />
      <Container />
      {!alreadySignedIn && <Signin />}
    </>
  );
}

export default App;
