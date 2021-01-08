import { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import{ NavLink } from 'react-router-dom'

class Belka extends Component {
 

render(){
    return(
        <>
  
  
      
   
    <Nav variant="tabs" defaultActiveKey="glowna">
  <Nav.Item>
    <Nav.Link eventKey="glowna"><NavLink to="/"> Strona głowna</NavLink></Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link eventKey="logowanie"><NavLink to="/logowanie"> Logowanie</NavLink></Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link eventKey="rejestracja" ><NavLink to="/rejestracja"> Rejestracja</NavLink></Nav.Link>
  </Nav.Item>
  
  <Nav.Item>
    <Nav.Link eventKey="kontakt" ><NavLink to="/kontakt"> Kontakt</NavLink></Nav.Link>
  </Nav.Item>
</Nav>

   
    </>
    )
}


}





export default Belka;