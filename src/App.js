import React, { Suspense } from 'react';
import './App.css';
import { createResourse } from './PersonApi';
import { Person } from './Person';
import { Num } from './Num';

const resource = createResourse();
function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Person resource={resource}/>
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Num resource={resource}></Num>
      </Suspense>
    </div>
  );
}

export default App;
