package  com.muzz.upscaleproductdevelopmentagency.repository;

import com.muzz.upscaleproductdevelopmentagency.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long>
{
}
