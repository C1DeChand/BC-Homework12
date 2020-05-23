drop database if exists homework12;
create database homework12;

use homework12;

create table department (
id int not null primary key,
name varchar(30)
);

create table role (
id int primary key,
title varchar(30),
salary decimal,
department_id int
);

create table employee (
id int primary key,
first_name varchar(30),
last_name varchar(30),
role_id varchar(30),
manager_id varchar(30)
);

#insert into cast (name, coolness_rating, attitude) values ("Church", 7, "Sarcastic Ass");
#insert into cast (name, coolness_rating, attitude) values ("Doughnut", 2, "Idiot");
#insert into cast (name, coolness_rating, attitude) values ("Griff", 5, "Grumpy");
#insert into cast (name, coolness_rating, attitude) values ("Caboose", 0, "Oblivious");