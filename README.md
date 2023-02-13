# Employee-Tracker

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Useage](#useage)
  - [Testing](#testing)
  - [Collaborators](#collaborators)
  - [Questions](#questions)

  ## Description 
  Built a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL. 
  
  Mysql schema contains 3 tables:

* `department`
  * `id: INT PRIMARY KEY`
  * `name: VARCHAR(30)`

* `role`
  * `id: INT PRIMARY KEY`
  * `title: VARCHAR(30)`
  * `salary: DECIMAL`
  * `department_id: INT`

* `employee`
  * `id: INT PRIMARY KEY`
  * `first_name: VARCHAR(30)`
  * `last_name: VARCHAR(30)`
  * `role_id: INT`
  * `manager_id: INT`


  ## Installation
  Installation of [Inquirer](https://www.npmjs.com/package/inquirer)
  *  Use ``npm install inquirer@8.2.4``

  Installation of [MySql](https://www.npmjs.com/package/mysql2)
  * Use ``npm install``

  ## Useage 
  This application will be invoked by using the following command: ``node index.js`` or ``npm start``. Answer the prompt questions to manage the company's employee database.
  
  Watch video of how to use the Employee Tracker: [here]().


![Mock of Employee Tracker Database](./assets/team-profile-generator-example.png)

  ## Testing 
  n/a

  ## Collaborators 
  n/a

  ## Questions?

  GitHub: [@RachelWildberger](https://github.com/RachelWildberger)

  Email: rachelwildberger@icloud.com