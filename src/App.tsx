import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import { Button } from "./Components/button";
import { useState } from "react";

function App() {
  const [Visibility, setVisibility] = useState(false);

  const fruits = ["Apple", "Banana", "Mango"];
  const handleSelectItem = (fruit: string) => {
    console.log(fruit);
  };
  return (
    <>
      <div>
        <ListGroup
          fruits={fruits}
          heading="Fruits"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        {Visibility && (
          <Alert onClose={() => setVisibility(false)}>
            Hello <span>Friends</span>
          </Alert>
        )}
      </div>
      <div>
        <Button
          text="click me"
          color="danger"
          onClick={() => setVisibility(true)}
        />
      </div>
    </>
  );
}

export default App;
