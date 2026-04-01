package com.example.whatsappdemo.controller;

import com.example.whatsappdemo.dto.MessageRecord;
import com.example.whatsappdemo.services.WhatsappService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class WhatsappController {
    private final WhatsappService whatsappService;

    @PostMapping("/sendWhatsappMessage")
    public String sendWhatsappMessage(@RequestBody MessageRecord messageRecord){
        return whatsappService.sendWhatsappMessage(messageRecord.getTo(), messageRecord.getMessage());
    }

}
