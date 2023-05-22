
import './App.css';
import { Cambia } from './components/Cambia';
import { Card } from './components/Card';
import { Elige } from './components/Elige';
import { Footer } from './components/Footer';
import {Menu} from './components/Menu';
import { Premium } from './components/Premium';

function App() {
  return (
    <div>
    <Menu />
    <Premium />
    <Cambia />
    <Elige />
    <Card/>
    <Footer />
    </div>
  );
}

export default App;
