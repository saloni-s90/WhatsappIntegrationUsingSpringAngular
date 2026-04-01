package com.example.whatsappdemo.services;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class WhatsappService {
    @Value("${twilio.account_sid}")
    private String account_sid;

    @Value("${twilio.auth_token}")
    private String auth_token;

    @Value("${twilio.whatsapp_number}")
    private String fromWhatsappNumber;

    @PostConstruct
    public void init(){
        Twilio.init(account_sid,auth_token);
    }

    public String sendWhatsappMessage(String to, String body){
        Message message = Message.creator(
                new PhoneNumber("whatsapp:"+to),
                new PhoneNumber(fromWhatsappNumber),
                body
        ).create();

        return message.getSid();
    }
}
