import logo from './logo.svg';
import './App.css';

import BubbleSortVisualizer from './bubbleSort';
import "./bubbleSort.css";

import QuickSortVisualizer from './quickSort';
import "./quickSort.css";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
      <BubbleSortVisualizer />
      <QuickSortVisualizer />
      </div>
    </div>
  );
}

export default App;
