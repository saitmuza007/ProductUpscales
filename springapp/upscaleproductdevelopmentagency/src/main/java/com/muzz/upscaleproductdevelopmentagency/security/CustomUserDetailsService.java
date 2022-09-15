package  com.muzz.upscaleproductdevelopmentagency.security;

import com.muzz.upscaleproductdevelopmentagency.model.User;
import com.muzz.upscaleproductdevelopmentagency.service.UserService;
import com.muzz.upscaleproductdevelopmentagency.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;


@Service
public class CustomUserDetailsService implements UserDetailsService
{
    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user = userService.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        Set<GrantedAuthority> authorities = Set.of(SecurityUtils.convertToAuthority(user.getRole().name()));

        //UserDetails
        return UserPrinciple.builder()
                .user(user)
                .id(user.getId())
                .username(user.getName())
                .password(user.getPassword())
                .authorities(authorities)
                .build();
    }
}
