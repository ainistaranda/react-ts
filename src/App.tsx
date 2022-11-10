import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import PhotoCard, { PhotoCardType } from './components/PhotoCard';
import AboutMe, { Person } from './components/AboutMe';

const me: Person = {
  name: 'Todd Albert',
  age: 47,
  awesome: true
}

const card: PhotoCardType = {
  photo: 'https://lh3.googleusercontent.com/ogw/AOh-ky34t5fd0w9ldRPKMVEIsV_xbcSYNHplZ9kVirThwQ=s32-c-mo',
  user: 'Todd Albert',
  mainPhoto: 'https://images.unsplash.com/photo-1665876702126-12c052834d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODExNjc0Ng&ixlib=rb-1.2.1&q=80&w=1080',
  description: '',
  likeCount: 99
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello TypeScript</h1>
        <AboutMe person={me} />
        <Counter />
        <Greeting firstName='Ainis' lastName='Taranda' />
        <Greeting firstName='Mike' lastName='Wazowski'/>
        <PhotoCard card={card}/>
      </header>
    </div>
  );
}

export default App;
