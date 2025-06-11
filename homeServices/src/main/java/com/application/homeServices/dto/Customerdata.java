package com.application.homeServices.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customerdata {
    private long UserId;
    private String email;
    private String name;
}
