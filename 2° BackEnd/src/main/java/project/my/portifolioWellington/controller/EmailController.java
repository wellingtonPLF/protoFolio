package project.my.portifolioWellington.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.my.portifolioWellington.service.EmailService;

import  project.my.portifolioWellington.model_DTO.EmailDTO;

@RestController
@RequestMapping("/")
public class EmailController {
   
   @Autowired
   private EmailService emailService;

   @GetMapping("/email")
   public Page<EmailDTO> getEmails(Pageable pageable) {
       return this.emailService.getEmails(pageable);
   }
   
   @GetMapping("/email/{id}")
   public EmailDTO getEmailPorId(@PathVariable("id") Long id) {
       return this.emailService.getEmailPorId(id);
   }
      
   @PostMapping("/email")
   public EmailDTO inserirEmail(@RequestBody @Valid EmailDTO email){
       return this.emailService.inserirOuAtualizar(email);
   }
   
   /*
   @PutMapping("/email/{idemail}")
   public EmailDTO atualizarEmail(@RequestBody EmailDTO email){
       return this.emailService.inserirOuAtualizar(email);
   }*/

   @DeleteMapping("/email/{idemail}")
   public void apagarEmail(@PathVariable("idemail") Long idemail) {
       this.emailService.apagar(idemail);
   }
}

