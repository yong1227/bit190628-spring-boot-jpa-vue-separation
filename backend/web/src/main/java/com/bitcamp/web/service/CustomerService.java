package com.bitcamp.web.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;
import com.bitcamp.web.repositories.CustomerRepository;
import com.bitcamp.web.service.CustomerService;

import org.apache.catalina.util.CustomObjectInputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CustomerServlceImpl
 */
@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    // 책 1번째 70페이지
    public Long count() {
        return customerRepository.count();
    }

    // 2번째
    public void delete(Customer customer) {
        customerRepository.delete(customer);
    }

    // 3번째
    public void delete(Iterable<Customer> it) {
        customerRepository.deleteAll();
    }

    // 4번째
    public void deleteAll() {
        customerRepository.deleteAll();
    }

    // 5번째
    public boolean exists(Long id) {
        return customerRepository.existsById(id);
    }

    // 6번째
    public Iterable<Customer> findAll() {
        return customerRepository.findAll();
    }

    // 7번째
    public Iterable<Customer> findAll(Iterable<Customer> it) {
        return findAll(it);
    }

    // 8번째
    public Optional<Customer> findById(Long id) {
        return customerRepository.findById(id);
    }

    // 9번째
    public Iterable<Customer> save(Iterable<Customer> it){
        return customerRepository.saveAll(it);
    }
    //10번째
    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }
}