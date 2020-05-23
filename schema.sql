drop database if exists homework12;
create database homework12;

use homework12;

create table department (
id int not null AUTO_INCREMENT,
name varchar(30),
primary key (id)
);

create table role (
id int AUTO_INCREMENT,
title varchar(30),
salary decimal,
department_id int,
primary key (id)
);

create table employee (
id int AUTO_INCREMENT,
first_name varchar(30),
last_name varchar(30),
role_id varchar(30),
manager_id varchar(30),
primary key (id)
);