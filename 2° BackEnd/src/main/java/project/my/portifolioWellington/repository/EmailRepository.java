package project.my.portifolioWellington.repository;

import java.util.List;

import  project.my.portifolioWellington.model_JPA.EmailJPA;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository<EmailJPA, Long> {

	public List<EmailJPA> findByName(String nome);
}
