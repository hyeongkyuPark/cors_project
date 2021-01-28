package ml.market.cors.domain.util.mail;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class MailTransfer {
    private final int port= 465;
    private String host = "smtp.naver.com";

    private String user = "ehaakdl";

    private String tail = "@naver.com";

    private String password = "!ahtpgns5652";

    private Properties props = System.getProperties();

    private boolean setProperties(){
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", port);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.ssl.enable", "true");
        props.put("mail.smtp.ssl.trust", host);
        return true;
    }
    public boolean send(String receiver, String title, String text) {
        setProperties();
        Message msg = head();
        try {
            body(msg, receiver, title, text);
            msg.setText(text);
            Transport.send(msg);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    private Message head(){
        Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
            protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
                return new javax.mail.PasswordAuthentication(user, password);
            }
        });
        session.setDebug(true);
        Message msg = new MimeMessage(session);
        return msg;
    }

    private void body(Message msg, String receiver, String title, String text) throws Exception{
        msg.setFrom(new InternetAddress(user + tail));
        msg.setRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
        msg.setSubject(title);
    }
}
