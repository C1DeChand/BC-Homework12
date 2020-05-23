use homework12;

INSERT INTO department (name) VALUES ("Asset Protection");

INSERT INTO department (name) VALUES ("Front End");

INSERT INTO department (name) VALUES ("Recieving");

INSERT INTO role (title, salary, department_id) VALUES ("Asset Protection Manager", 30000, 1);

INSERT INTO role (title, salary, department_id) VALUES ("Asset Protection Specialist", 20000, 1);

INSERT INTO role (title, salary, department_id) VALUES ("Customer Engagement Specialist", 18000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("R.", "Bryant", 1, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("V.", "Espinosa", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("C.", "DeChand", 3, 1);