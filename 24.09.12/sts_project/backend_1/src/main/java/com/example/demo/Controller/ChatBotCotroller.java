package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping
@Controller
public class ChatBotCotroller {

	@GetMapping("/chatbot")
	public String chatbot () {
		return "chatbot";
	}
}
