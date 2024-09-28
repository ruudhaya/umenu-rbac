import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom'
import simpledata from './sampledata/menusample';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu data={simpledata} orientation="horizontal" />
      </BrowserRouter>
    </div>
  );
}

export default App;
