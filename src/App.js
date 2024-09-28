import Menu from './components/Menu';
import simpledata from './sampledata/menusample';

function App() {
  console.log(simpledata);
  return (
    <div>
      <Menu data={simpledata} orientation="horizontal" />
    </div>
  );
}

export default App;
