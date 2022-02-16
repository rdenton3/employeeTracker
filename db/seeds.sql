INSERT INTO dept (name)
VALUES
  ('Human Resources'),
  ('Finance'),
  ('Marketing');

INSERT INTO employeeRole (title, salary, dept_id)
VALUES
  ('Manager',50,1),
  ('Employee',45,2),
  ('Intern',30,3);

INSERT INTO employeeInfo (first_name, last_name, role_id)
VALUES
  ('Manager',50,1),
  ('Employee',45,2),
  ('Intern',30,3);
