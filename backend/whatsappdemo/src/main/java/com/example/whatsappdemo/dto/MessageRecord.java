package com.example.whatsappdemo.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class MessageRecord {
    private String to;
    private String message;
}
