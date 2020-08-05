import React from 'react';
import './App.scss';
import { XMLReader } from './Widgets/XMLReader';
import { Row } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <span>Usus Lector</span><br />
        Still a work in progress</p>
      </header>
      <Row>
        <XMLReader />
      </Row>
    </div>
  );
}

export default App;
