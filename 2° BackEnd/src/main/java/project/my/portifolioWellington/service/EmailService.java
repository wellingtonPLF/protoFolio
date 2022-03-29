package project.my.portifolioWellington.service;

import java.time.LocalDateTime;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import project.my.portifolioWellington.enums.StatusEmail;
import  project.my.portifolioWellington.model_DTO.EmailDTO;
import project.my.portifolioWellington.model_JPA.EmailJPA;
import project.my.portifolioWellington.repository.EmailRepository;

@Service
public class EmailService {
   
   @Autowired
   private EmailRepository EmailRepository;
   
   @Autowired
   private JavaMailSender emailSender;

   public Page<EmailDTO> getEmails(Pageable pageable) {
	   Page<EmailJPA> emails = this.EmailRepository.findAll(pageable);
	   Page<EmailDTO> result = emails.map(x -> new EmailDTO(x)); 
       return result;
   }
   
   public EmailDTO getEmailPorId(Long id) {
	   EmailJPA email = this.EmailRepository.findById(id).orElse(null);
	   EmailDTO result = new EmailDTO(email);
       return result;
   }
   
   @SuppressWarnings("finally")
   @Transactional
   public EmailDTO inserirOuAtualizar(EmailDTO emailDTO) {
	   emailDTO.setEmailTo("wellplf@gmail.com");
	   
	   EmailJPA email = new EmailJPA(emailDTO);	   
	   email.setSendDateEmail(LocalDateTime.now());
	   try {
		   SimpleMailMessage message = new SimpleMailMessage();
		   message.setTo(email.getEmailTo());
		   message.setSubject("Mensagem enviada pelo Portifolio");
		   message.setText("Email: " + email.getEmailFrom() + "\nMensagem: " + email.getText());
		   this.emailSender.send(message);
		   email.setStatusEmail(StatusEmail.SENT);
	   }
	   catch (MailException e) {
		   System.out.println(e);
		   email.setStatusEmail(StatusEmail.ERROR);
	   }
	   finally {
		   EmailJPA response = this.EmailRepository.save(email);
		   EmailDTO result = new EmailDTO(response);
		   return result;
	   }
   }
   
   public void apagar(Long idEmail) {
	   this.EmailRepository.deleteById(idEmail);
   }
}