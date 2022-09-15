package  com.muzz.upscaleproductdevelopmentagency.security.jwt;;

import com.muzz.upscaleproductdevelopmentagency.security.UserPrinciple;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;


public interface JwtProvider
{
    String generateToken(UserPrinciple auth);

    Authentication getAuthentication(HttpServletRequest request);

    boolean isTokenValid(HttpServletRequest request);
}
