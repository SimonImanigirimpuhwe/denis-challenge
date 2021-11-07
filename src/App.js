import React from 'react'
import { Card } from './components/Card';
import { Divider } from './components/Divider';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Progress } from './components/Progress';


function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Card />
        <Divider />
        <Progress />
        <Progress color="red"/>
        <Input type="checkbox" />
        <Input type="checkbox"  isChecked/>
        <Input type="radio"/>
        <Input type="radio" isChecked={true}/>
      </div>
    </div>
  );
}

export default App;
