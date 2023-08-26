package com.DataApi1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableAutoConfiguration(exclude={MongoAutoConfiguration.class})
public class DataApi1Application {

	public static void main(String[] args) {
		SpringApplication.run(DataApi1Application.class, args);
	}

}
