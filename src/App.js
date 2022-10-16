import { useState } from "react";

import Title from './components/Title';
import './App.css';

function App() {
  const [isOpened, setOpened] = useState(false)

  const handleOpening = () => {
    setOpened(prevState => !prevState);
  };

  // Вариант с &&
  return (
    <div>
      {!isOpened && <button onClick={handleOpening}>Open title</button>}
      {isOpened && <>
        <Title name="Products" type="bold" />
        <Title name="Employees" type="normal" /> </>}
    </div>
  );

  // Вариант подлиннее
  // if (!isOpened) {
  //   return (
  //   <div>
  //     <button onClick={handleOpening}>Open title</button>
  //     </div>
  //   )
  // };

  // return (
  // <div>
  // <Title name="Products" type="bold" />
  // <Title name="Employees" type="normal" />
  //   </div>
  // )
}

export default App;
