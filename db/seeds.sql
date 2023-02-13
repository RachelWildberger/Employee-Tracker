INSERT INTO department (department_name)
VALUES ("Programming"),
       ("Sales"),
       ("Creative"),
       ("Marketing"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 110000, 1),
       ("Web Developer", 80000, 1),
       ("Program Manager", 115000, 1),
       ("Sales Manager", 95000, 2),
       ("Sales Development Rep", 80000, 2),
       ("Creative Director", 110000, 3),
       ("Graphic Designer", 70000, 3),
       ("Accounts Manager", 75000, 4),
       ("Financial analyst", 95500, 5),
       ("Legal Operations Manager", 88000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Simon", "Mitchell", 3, NULL),
       ("Austin", "Alexander", 4, NULL),
       ("Danica", "O'Neil", 6, NULL),
       ("Alison", "Riley", 8, NULL),
       ("Chris", "Bauer", 9, NULL),
       ("Sophia", "Sheridan", 10, NULL);


SELECT * FROM employee;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Will", "Johnson", 1, 1),
       ("Kat", "Walsh", 2, 1),
       ("Christina", "Nash", 5, 2),
       ("Peter", "Gibbs", 7, 3),
       ("Bonnie", "Mullins", 7, 3),
       ("Tyler", "Taylor", 5, 2),
       ("Panda", "Greenberg", 1, 1),
       ("Matt", "Cristiano", 9, 5);