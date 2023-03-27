import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
      <Content></Content>
    </div>
  );
}

export default App;
