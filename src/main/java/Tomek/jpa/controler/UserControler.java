package Tomek.jpa.controler;

import Tomek.jpa.model.User;
import Tomek.jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class UserControler {
    @Autowired
    UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users")
    public List<User> getUsers(){
        System.out.println("wyswietlono uzytkowników");
        return userRepository.findAll();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user/id/{id}")
    public Optional<User> getSingleUser(@PathVariable int id){
        System.out.println("wyswietlono uzytkownika o ik"+ id);
        return userRepository.findById(id);
    }


    @PostMapping("/user")
//    @CrossOrigin(origins = "http://localhost:3000")
    @CrossOrigin(origins = "http://192.168.1.127:3000")
    public ResponseEntity addUser (@RequestBody User user){
        List<User> userFromDb = userRepository.findByName(user.getName().toLowerCase());

        if (userFromDb.isEmpty()) {
            user.setName(user.getName().toLowerCase());
            User userSaved = userRepository.save(user);
            System.out.println("dodano uzytkowika " + user);
            return ResponseEntity.ok(userSaved);
        }else
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping  ("/user/name/{name}")
    public ResponseEntity deleteUserByName (@PathVariable String name){

        List<User> userByName = userRepository.findByName(name);
        if (!userByName.isEmpty()){
            userRepository.delete(userByName.get(0));
            return ResponseEntity.status(HttpStatus.OK)
                    .body("usinieto uzytkownika");
        }else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("brak uzytkownika w bazie");

    }


}
