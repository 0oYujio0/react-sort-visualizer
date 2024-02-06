import './App.css';

import BubbleSortVisualizer from './bubbleSort';
import "./bubbleSort.css";

import QuickSortVisualizer from './quickSort';
import "./quickSort.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Sort Visualizer</header>
      <div class="wrapper">
        <BubbleSortVisualizer />
        <QuickSortVisualizer />
      </div>
      <footer className="App-footer"></footer>
    <footer className="App-footer">© 2024 Sort Visualizer. All rights reserved.</footer>
    </div>
  );
}

export default App;
