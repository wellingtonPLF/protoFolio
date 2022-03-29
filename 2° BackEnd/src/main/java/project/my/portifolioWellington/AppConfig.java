package project.my.portifolioWellington;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration 
public class AppConfig {
	
   @Bean 
   public WebMvcConfigurer corsConfigurer() {
       return new WebMvcConfigurer() {
           @Override public void addCorsMappings(CorsRegistry registry) {
               registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST", "PUT", "DELETE");
           }
       };
   }
   
}