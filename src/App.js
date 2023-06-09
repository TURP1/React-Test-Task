import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';

function App() {
  return (
    <div>
      <div className="header">
      <Header></Header>
      </div>
      <div className="content">
        <MainContent></MainContent>
        <Content></Content>
      </div>

    </div>
  );
}

export default App;
