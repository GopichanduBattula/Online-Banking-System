package com.ihub.www.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ihub.www.interceptor.RequestHeaderInterceptor;

@Configuration
public class ApplicationConfig implements WebMvcConfigurer{

	@Autowired
	private RequestHeaderInterceptor requestHeaderInterceptor;
	@Override
	public void addInterceptors( InterceptorRegistry registry) {
		registry.addInterceptor(requestHeaderInterceptor); //addInterceptor is predefined method
	}
	
}
