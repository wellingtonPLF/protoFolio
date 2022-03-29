package project.my.portifolioWellington.model_JPA;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import project.my.portifolioWellington.enums.StatusEmail;
import project.my.portifolioWellington.model_DTO.EmailDTO;

@Entity
@Table(name = "email")
public class EmailJPA{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idEmail;
	private String name;
	private String emailFrom;
	private String emailTo;
	private LocalDateTime sendDateEmail;
	private StatusEmail statusEmail;
	
	@Column(columnDefinition="TEXT")
	private String text;
	
	public EmailJPA(){}
	
	public EmailJPA(EmailDTO emailDTO){
		this.idEmail = emailDTO.getIdEmail();
		this.name = emailDTO.getName();
		this.text = emailDTO.getText();
		this.emailFrom = emailDTO.getEmailFrom();
		this.emailTo = emailDTO.getEmailTo();
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

	public LocalDateTime getSendDateEmail() {
		return sendDateEmail;
	}

	public void setSendDateEmail(LocalDateTime sendDateEmail) {
		this.sendDateEmail = sendDateEmail;
	}

	public StatusEmail getStatusEmail() {
		return statusEmail;
	}

	public void setStatusEmail(StatusEmail statusEmail) {
		this.statusEmail = statusEmail;
	}
}