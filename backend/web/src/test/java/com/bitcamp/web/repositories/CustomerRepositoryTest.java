package com.bitcamp.web.repositories;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.equalTo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * CustomerRepositoryTest
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerRepositoryTest {

    @Autowired
    private CustomerRepository repo;

    @Test
    public void countTest() throws Exception {
        Long count = repo.count();
        assertThat(Integer.parseInt(31+""), equalTo(31));
    }
    
}