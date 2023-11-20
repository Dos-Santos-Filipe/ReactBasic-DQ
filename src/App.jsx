import "./App.css";
import Button from "./components/button";
import TextWithProps from "./components/text";

function App() {
  return (
    <>
      <TextWithProps
        color="red"
        textTransform="uppercase"
        content="Desafio 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore dolorum architecto ducimus aperiam. Velit sit ab sed qui, maiores minima accusantium ad distinctio eaque a, doloremque delectus molestias similique!"
      />
      <Button label="Desafio 2" />
    </>
  );
}

export default App;
