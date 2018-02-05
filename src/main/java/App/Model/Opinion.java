package App.Model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Opinion {
	
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;

@ManyToOne
private Usuario autor;

private String cuerpo;
private String mail;


public Opinion(Usuario autor, String cuerpo, String mail) {
	super();
	this.autor = autor;
	this.cuerpo = cuerpo;
	this.mail = mail;
	
}

public Opinion(){
	
}

public String getMail() {
	return mail;
}

public void setMail(String mail) {
	this.mail = mail;
}

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public Usuario getAutor() {
	return autor;
}

public void setAutor(Usuario autor) {
	this.autor = autor;
}

public String getCuerpo() {
	return cuerpo;
}

public void setCuerpo(String cuerpo) {
	this.cuerpo = cuerpo;
}

public void setEmail(String mail2) {
	// TODO Auto-generated method stub
	this.mail=mail2;
}






	
}
