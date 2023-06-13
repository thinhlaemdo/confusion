import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React,{Component} from 'react';
import Helloclasscomponent from './Component/Helloclasscomponent';
import Hellofuntioncomponent from './Component/Helloclasscomponent';
import DemoCountClassComponents from './Component/DemoCountClassComponents';
import DemoFuntionCountComponents from './Component/DemoFuntionCountComponents';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand> */}
            <header className='App-header'>
            {/* <Helloclasscomponent/>
            <Hellofuntioncomponent/> */}
            <DemoCountClassComponents/>
            <DemoFuntionCountComponents/>
            
            </header>
           
          </div>
    //     </Navbar>
    //   </div>
    );
  }
}


export default App;