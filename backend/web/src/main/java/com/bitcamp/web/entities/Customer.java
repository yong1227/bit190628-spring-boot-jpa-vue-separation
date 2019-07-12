package com.bitcamp.web.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Customer
 */

@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@ToString
@Table(name = "customers")

public class Customer implements Serializable{
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column(name = "customer_id")
    private String customerId;
    @Column(name ="customer_name")
    private String customerName;
    @Column(name ="password")
    private String password;
    @Column(name ="ssn")
    private String ssn;
    @Column(name = "phone")
    private String phone;
    @Column(name = "city")
    private String city;
    @Column(name = "address")
    private String address;
    @Column(name = "postalcode")
    private String postalcode;
    @Column(name = "photo")
    private String photo;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "member")
    private List<MemberRole> roles;


    @Override
    public String toString(){
        return String.format("고객정보 NO : %d / ID : %s / NA : %s / PW : %s / SSN : %s / PH : %s / CT : %s / AD : %s / PO : %s / PH : %s",
        id, customerId, customerName, password, ssn, phone, city, address, postalcode, photo);
    }

    @Builder
    private Customer(String customerId,  String customerName, String password, String ssn, String phone, String city,  String address,
                                String postalcolde, String photo){
            this.customerId = customerId;
            this.customerName = customerName;
            this.password = password;
            this.ssn = ssn;
            this.phone = phone;
            this.city = city;
            this.address = address;
            this.postalcode = postalcolde;
            this.photo = photo;
    }
}