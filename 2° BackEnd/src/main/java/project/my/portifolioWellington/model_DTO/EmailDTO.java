package project.my.portifolioWellington.model_DTO;

import javax.validation.constraints.NotBlank;

import java.time.LocalDateTime;

import javax.validation.constraints.Email;

import project.my.portifolioWellington.enums.StatusEmail;
import project.my.portifolioWellington.model_JPA.EmailJPA;

public class EmailDTO{
	
	@NotBlank
	private Long idEmail;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String text;
	
	@NotBlank
	@Email
	private String emailFrom;
	
	@NotBlank
	@Email
	private String emailTo;
	
	@NotBlank
	private LocalDateTime sendDateEmail;
	
	@NotBlank
	private StatusEmail statusEmail;
	
	public EmailDTO(){}
	
	public EmailDTO(Long idEmail, String name, String text, String emailFrom, String emailTo) {
		this.idEmail = idEmail;
		this.name = name;
		this.text = text;	
		this.emailFrom = emailFrom;
		this.emailTo = emailTo;
	}
	
	public EmailDTO(EmailJPA email) {
		this.idEmail = email.getIdEmail();
		this.text = email.getText();
		this.name = email.getName();
		this.emailFrom = email.getEmailFrom();
		this.emailTo = email.getEmailTo();
		this.statusEmail = email.getStatusEmail();
		this.sendDateEmail = email.getSendDateEmail();
	}

	public Long getIdEmail() {
		return idEmail;
	}

	public void setIdEmail(Long idEmail) {
		this.idEmail = idEmail;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getEmailFrom() {
		return emailFrom;
	}

	public void setEmailFrom(String emailFrom) {
		this.emailFrom = emailFrom;
	}

	public String getEmailTo() {
		return emailTo;
	}

	public void setEmailTo(String emailTo) {
		this.emailTo = emailTo;
	}

	public StatusEmail getStatusEmail() {
		return statusEmail;
	}

	public void setStatusEmail(StatusEmail statusEmail) {
		this.statusEmail = statusEmail;
	}
}
