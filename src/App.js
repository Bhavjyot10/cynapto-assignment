import './App.css';
import Header from './Components/Header';
import Creation from './Components/Creation';
import RecentVideos from './Components/RecentVideos';
import Logo from './Components/Logo';
import SideButtons from './Components/SideButtons';
function App() {
  return (
      <div className="App">
          <div className="left-side">
              <Logo />
              <SideButtons />
          </div>

          <div className="right-side">
              <Header />
              <Creation />
              <RecentVideos />
          </div>
         
    </div>
  );
}

export default App;
