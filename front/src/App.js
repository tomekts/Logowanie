import './Style/App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rejestracja from './Pages/Rejestracja.js'
import Belka from './Pages/Belka.js';
import Kontakt from './Pages/Kontakt.js';
import Logowanie from './Pages/Logowanie.js';
import Glowna from './Pages/Glowna.js';


class App extends Component {
  render(){
    return(
      <>        
        <Router>     
        <Belka />   
          <Switch>
            <Route exact path="/" component={Glowna} />
            <Route path="/rejestracja" component={Rejestracja}/>
            <Route path="/kontakt" component={Kontakt}/>
            <Route path="/logowanie" component={Logowanie}/>
          </Switch>
          
        </Router>

      </>
    )     
  }
}

export default App;
