package  com.muzz.upscaleproductdevelopmentagency.service;

import com.muzz.upscaleproductdevelopmentagency.model.Role;
import com.muzz.upscaleproductdevelopmentagency.model.User;
import com.muzz.upscaleproductdevelopmentagency.model.Product;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


public interface UserService
{
    User saveUser(User user);

    Optional<User> findByUsername(String username);

    void changeRole(Role newRole, String username);

    List<User> findAllUsers();

    void deleteUser(Long id);
}
