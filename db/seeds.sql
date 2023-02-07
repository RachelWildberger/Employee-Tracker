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
       ("Systems Administrator", 84800, 1),
       ("Sales Manager", 95000, 2),
       ("Sales Development Rep", 80000, 2),
       ("Project Manager", 71000, 3),
       ("Creative Director", 110000, 3),
       ("Graphic Designer", 70000, 3),
       ("Accounts Manager", 75000, 4),
       ("Growth Marketing", 75000, 4),
       ("Analytics Lead", 80000, 4),
       ("Financial analyst", 95500, 5),
       ("Legal Operations Manager", 88000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Will", "Johnson", 010, 012),
       ("Kat", "Walsh", 011, 012),
       ("Simon", "Mitchell", 012, NULL),
       ("Austin", "Alexander", 013, 012),
       ("Christina", "Nash", 014, NULL),
       ("Danica", "O'Neil", 015, 014),
       ("Peter", "Gibbs", 016, NULL),
       ("Alison", "Riley", 017, 016),
       ("Chris", "Bauer", 018, 017),
       ("Sophia", "Sheridan", 019, NULL),
       ("Bonnie", "Mullins", 020, 019 ),
       ("Tyler", "Taylor", 021, NULL),
       ("Matt", "Cristiano", 022, NULL),
       ("Panda", "Greenberg", 023, NULL);