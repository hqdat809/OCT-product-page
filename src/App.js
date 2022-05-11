import './App.css';
import Header from "./Component/Header/Header"
import Content from './Component/Content/Content';
import ModalView from './Component/Modal/ModalView';
import { useStore } from "./store/hooks"


function App() {
  const [state, dispatch] = useStore()
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Content />
        {state.toggleModal && <ModalView />}
      </div>
    </div>
  );
}

export default App;
