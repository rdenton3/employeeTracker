INSERT INTO dept (name)
VALUES
  ('Software Engineering'),
  ('Human Resources'),
  ('Finance'),
  ('Marketing');

INSERT INTO employeeRole (title, salary, dept_id)
VALUES
  ('Manager',50,1),
  ('Employee',45,2),
  ('Intern',30,3);

INSERT INTO employeeInfo (first_name, last_name, manager, role_id, dept_id)
VALUES
  ('Dolly', 'Parton', 'Taylor Swift',2,1),
  ('Taylor', 'Swift', 'None',1,2),
  ('Johnny', 'Cash', 'Dolly Parton',3,4);
