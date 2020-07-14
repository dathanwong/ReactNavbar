import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import FormWrapper from './Components/FormWrapper';
import Wrapper from './Components/Wrapper';
import MyContext from './Context/MyContext';

function App() {
  const [name, setName] = useState("");

  return (
    <MyContext.Provider value={{name, setName}}>
      <Wrapper>
        <Navbar/>
        <FormWrapper/>
      </Wrapper>
    </MyContext.Provider>
  );
}

export default App;
