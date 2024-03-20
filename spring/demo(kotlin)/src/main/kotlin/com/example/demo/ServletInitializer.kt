package com.example.demo

import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer

class ServletInitializer : SpringBootServletInitializer() {

	override fun configure(application: SpringApplicationBuilder): Spr₩ingApplicationBuilder {
		return application.sources(DemoApplication::class.java)
	}

}
