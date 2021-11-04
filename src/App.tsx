import Container from "./Components/Container";
import Controls from "./Components/ControlComponents/Controls";
import NavBar from "./Components/NavBar";
import Signin from "./Components/SigninComponents/Signin";

function App() {
  return (
    <>
      <NavBar />
      <Controls />
      <Container />
      <Signin />
    </>
  );
}

export default App;
