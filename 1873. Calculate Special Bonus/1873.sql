-- 1873. Calculate Special Bonus
-- https://leetcode.com/problems/calculate-special-bonus/

select
    employee_id,
    salary * (employee_id % 2) * (name not like 'M%') as bonus
from employees
order by employee_id;