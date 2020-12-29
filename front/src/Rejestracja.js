import { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Rejestracja.css'



class Rejestracja extends Component {

  handleSubmit = event => {
    event.preventDefault();
    this.registerUser(event.target.login.value, event.target.password.value);

}




registerUser(username, password) {
  console.log(username + password)
  fetch('http://localhost:8080/user',{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: username,
        password: password,
    })
}
  
  ).then(function(response){
    if(response.status === 200){
      console.log("dodano uzytkownjika")
      alert('dodano uzytkownika')
    }else{
      console.log('uzytkownik nie został zarejestrownay')
      alert('uzytkownik niezarejstrowany')
    }
  })
}


  render(){
    return <div className="Register">
      <Form onSubmit = { this.handleSubmit } >
       <Form.Group controlId = "login" size = "lg">
            <Form.Label> Login </Form.Label>
            <Form.Control autoFocus name = "login"/>
            </Form.Group>

            <Form.Group controlId = "password" size = "lg">
            <Form.Label> Password1 </Form.Label>
            <Form.Control autoFocus name = "password"/>
            </Form.Group>    


            <Button block size = "lg" type = "submit">
            Register
            </Button>


         
     </Form>
     
     

    </div>






  }
}

export default Rejestracja;
