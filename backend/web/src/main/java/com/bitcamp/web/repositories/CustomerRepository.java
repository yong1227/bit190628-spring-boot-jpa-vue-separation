package com.bitcamp.web.repositories;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CustomerRepository
 */
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{

    //로그인 
    public CustomerDTO findByCustomerIdAndPassword(String customerId, String password);

    
}