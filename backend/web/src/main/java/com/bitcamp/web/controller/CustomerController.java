package com.bitcamp.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import javax.persistence.EntityNotFoundException;

import com.bitcamp.web.common.lambda.IFunction;
import com.bitcamp.web.common.lambda.ISupplier;
import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;
import com.bitcamp.web.repositories.CustomerRepository;
import com.bitcamp.web.service.CustomerService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.BeanUtils;

/**
 * CustomerController
 */
@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customerDTO;
    @Autowired ModelMapper modelMapper;
    @Autowired CustomerRepository repo;

    @Bean
    public ModelMapper modelmapper(){
        return modelMapper = new ModelMapper();
    }

    @GetMapping("/count")
    public long count() {
        System.out.println("===count() 진입===");
        return customerService.count();
    }

    // @DeleteMapping("/{id}")
    // public void delete(CustomerDTO dto){
    // customerService.delete(null);
    // }

    // @DeleteMapping("")
    // public void deleteAll(){
    // customerService.deleteAll();
    // }

    // @DeleteMapping("")
    // public void deleteAll(Iterable<CustomerDTO> dto){
    // customerService.deleteAll(null);
    // }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable String id) {
        System.out.println("delect : " + id);
        Long l = Long.parseLong(id);
        customerService.deleteById(l);
    }

    @GetMapping("/exists/{id}")
    public boolean existsById(@PathVariable String id) {
        System.out.println("existsById로 넘어온 아이디" + id);
        Long l = Long.parseLong(id);
        return customerService.existsById(l); 
    }

    @GetMapping("")
    public Iterable<CustomerDTO> findAll() {
        Iterable<Customer> entities = customerService.findAll();
        List<CustomerDTO> list = new ArrayList<>();
        for(Customer s : entities){
            CustomerDTO cust = modelMapper.map(s, CustomerDTO.class);
            list.add(cust);
        }
        return list;
    }

    // @GetMapping("/{id}")
    // public Iterable<CustomerDTO> findAllById(Iterable<Long> ids){
    // Iterable<Customer> entity = customerService.findAllById(ids);
    // return null;
    // }

    @GetMapping("/find/{id}")
    public CustomerDTO findById(@PathVariable String id) {
        // ModelMapper modelMapper = new ModelMapper(); 
        System.out.println("findById 안으로 들어온 ID : " + id);
        Customer entity = customerService
                                    .findById(Long.parseLong(id))
                                    .orElseThrow(EntityNotFoundException::new)
                                    ;
        System.out.println(">>>>"+entity.toString());
        CustomerDTO c = modelMapper.map(entity, CustomerDTO.class);
        System.out.println("조회결과: "+c.toString());
        return c;

    }

    @PostMapping("")
    public HashMap<String,String> save(@RequestBody CustomerDTO dto) {
        System.out.println("회원가입" + dto.toString());
        HashMap<String,String> map = new HashMap<>();
        // BeanUtils.copyProperties(dto, new Customer());
        // Customer entity = modelMapper.map(dto, Customer.class);
        // entity = modelMapper.map(dto, Customer.class);
        // System.out.println(entity.toString());
        Customer entity = new Customer();
        entity.setCustomerId(dto.getCustomerId());
        entity.setCustomerName(dto.getCustomerName());
        entity.setAddress(dto.getAddress());
        entity.setCity(dto.getCity());
        entity.setPassword(dto.getPassword());
        entity.setSsn(dto.getSsn());
        entity.setPhone(dto.getPhone());
        entity.setPostalcode(dto.getPostalcode());
        entity.setPhoto(dto.getPhoto());       

        System.out.println("엔티티로 바뀐 정보 : " + entity.toString());
        customerService.save(entity);
        map.put("result", "SUCCESS");
        return map;
    }

    // @PostMapping("")
    // public Iterable<CustomerDTO> saveAll(Iterable<CustomerDTO> dto){
    // Iterable<Customer> entity = customerService.saveAll(null);
    // return null;
    // }

    // 로그인
    @PostMapping("/login")
    public CustomerDTO login(@RequestBody CustomerDTO dto){
      System.out.println("로그인 진입");
      System.out.println("ID : "+dto.getCustomerId());
      System.out.println("PW : "+dto.getPassword());
      ISupplier fx = (() -> {
          return repo.findByCustomerIdAndPassword(dto.getCustomerId(), dto.getPassword());
      });
      return (CustomerDTO) fx.get();
    }
}