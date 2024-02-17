package com.ihub.www.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.ihub.www.filter.JwtAuthFilter;
import com.ihub.www.utility.Constants.UserRole;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

	@Autowired
	 private JwtAuthFilter jwtAuthFilter;
	
	// Authentication 
	@Bean 
	 public UserDetailsService userDetailsService() {
		 return new CustomUserDetailsService();
	 }
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	  	  http.csrf(csrf->csrf.disable()).cors(cors->cors.disable())
				 .authorizeHttpRequests(auth->auth.requestMatchers("api/user/login","api/user/admin/register")
				 .permitAll()
				//This API'S only accessible by ADMIN
		  .requestMatchers("api/bank/register","api/bank/fetch/allBanks",
				  "api/bank/fetch/user","api/bankAccount/fetch/all",
				  "api/bankAccountTransaction/fetch/allBankCustomerTransactions",
				  "api/bank/fetch/Id","api/user/fetch/All Bank Managers")
		  .hasAuthority(UserRole.ROLE_ADMIN.value())
		 
				//This API'S only accessible by BANK
		 
		  .requestMatchers("api/bankAccount/add",
				  "api/bankAccount/fetch/BankIdWise","api/bankAccount/fetch/Id",
				  "api/bankAccount/fetch/User","api/bankAccount/search",
				  "api/bankAccount/update/status",
				  "api/bankAccountTransaction/deposit/transaction",
				  "api/bankAccountTransaction/withDraw/transaction",
				  "api/bankAccountTransaction/Transfer/Transaction",
				  "api/bankAccountTransaction/bank/userTransactionHistory",
				  "api/bankAccountTransaction/bank/customerTransaction",
				  "api/bankAccountTransaction/Bank customer transaction/ by Time Range",
				  "api/bankAccountTransaction/All customers Transaction/ by time range",
				  "api/bankAccountTransaction/All customer Transaction",
				  "api/bankAccountTransaction/Customer transaction / by time range",
				  "api/bankAccountTransaction/download/Statement",
				  "api/user/fetch/By BankId","api/user/fetch/All Bank Users",
				  "api/user/search/Id's,customers","api/user/search/customer","api/user/Update/user Status")
		  .hasAuthority(UserRole.ROLE_BANK.value())
	
		//This API'S only accessible by Customer  
		  
		.requestMatchers(
				"api/bankAccountTransaction/deposit/transaction",
				"api/bankAccountTransaction/withDraw/transaction",
				"api/bankAccountTransaction/Transfer/Transaction",
				"api/bankAccountTransaction/download/Statement")
		.hasAuthority(UserRole.ROLE_CUSTOMER.value())
		
		//This API'S only accessible by both BANK and CUSTOMER
		
				.requestMatchers(
						"api/bankAccountTransaction/deposit/transaction",
						"api/bankAccountTransaction/withDraw/transaction",
						"api/bankAccountTransaction/Transfer/Transaction",
						"api/bankAccountTransaction/downloadBankStatement").hasAnyAuthority(UserRole.ROLE_BANK.value(),UserRole.ROLE_CUSTOMER.value())
				
		
		//This API'S only accessible by both BANK and ADMIN
		.requestMatchers(
				         "api/bankAccount/fetch/all",
				         "api/bankAccount/fetch/BankIdWise","api/bankAccount/fetch/Id",
				         "api/bankAccount/fetch/User",
				         "api/bankAccount/search","api/bankAccount/update/status",
				         "api/bankAccountTransaction/bank/customerTransaction",
				         "api/bankAccountTransaction/Bank customer transaction/ by Time Range",
				         "api/bankAccountTransaction/All customers Transaction/ by time range",
				         "api/bankAccountTransaction/All customer Transaction",
				         "api/bankAccountTransaction/Customer transaction / by time range",
				          "api/user/search/Id's,customers",
				         "api/user/search/customer")
		.hasAnyAuthority(UserRole.ROLE_ADMIN.value(),UserRole.ROLE_BANK.value())
		
		//This API'S only accessible by both BANK and ADMIN and CUSTOMER
		
				.requestMatchers(
						"api/bankAccountTransaction/download/Statement"
				     ).hasAnyAuthority(UserRole.ROLE_ADMIN.value(),UserRole.ROLE_CUSTOMER.value(),UserRole.ROLE_BANK.value())
				    		 .anyRequest()
				    		 .authenticated()).
		sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		http.addFilterBefore(jwtAuthFilter,UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	
	}
		@Bean
		public PasswordEncoder passwordEncoder() {
			return new BCryptPasswordEncoder();
		}

		@Bean
		public AuthenticationProvider authenticationProvider() {
			DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
			authenticationProvider.setUserDetailsService(userDetailsService());
			authenticationProvider.setPasswordEncoder(passwordEncoder());
			return authenticationProvider;
		}

		@Bean
		public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
			return config.getAuthenticationManager();
		}
		
		
	
	  
	
	
	
	
}