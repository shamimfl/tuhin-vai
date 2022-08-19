import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import ShortStory from './Component/ShortStory/ShortStory';
import FullStory from './Component/FullStory/FullStory';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <div >
      <Header></Header>
      <ShortStory></ShortStory>
      <FullStory></FullStory>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
