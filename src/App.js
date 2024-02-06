import logo from './logo.svg';
import './App.css';

import BubbleSortVisualizer from './bubbleSort';
import "./bubbleSort.css";

import QuickSortVisualizer from './quickSort';
import "./quickSort.css";

function App() {
  return (
    <div className="App">
      <BubbleSortVisualizer />
      <QuickSortVisualizer />
    </div>
  );
}

export default App;
