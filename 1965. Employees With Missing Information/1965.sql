-- 1965. Employees With Missing Information
-- https://leetcode.com/problems/employees-with-missing-information/description/

-- Write your MySQL query statement below

select employee_id from employees where employee_id not in (
  select employee_id from salaries
)

union

select employee_id from salaries where employee_id not in (
  select employee_id from employees
)

order by employee_id