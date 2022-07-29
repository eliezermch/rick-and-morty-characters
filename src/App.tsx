import { Header } from "./components/header/Header";
import { CharacterList } from "./components/characterList/CharacterList";
import React from "react";

import { GlobalStateProvider } from "./context/context";

function App() {
  return (
    <React.Fragment>
      <GlobalStateProvider>
        <Header />
        <CharacterList />
      </GlobalStateProvider>
    </React.Fragment>
  );
}

export default App;
