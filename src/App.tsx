import Aside from './components/Aside/Aside';
import ItemsList from './components/ItemsList/ItemsList';
import Comments from './components/Comments/Comments';
import "./app.scss"

function App() {
  return (
    <main className='main'>
      <div className='wrapper'>
        <Aside />
        <div className='content'>
          <ItemsList />
          <Comments />
        </div>
      </div>
    </main>
  );
}

export default App;
