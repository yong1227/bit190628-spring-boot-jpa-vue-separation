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
    public CustomerDTO login(Customer entity);

    //로그인 2
    public List<CustomerDTO> findByCustomerId(String customerId);

    // list.get0하면 index0 번째꺼 무조건 가져온다.
}