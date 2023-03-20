-- 627. Swap Salary
-- https://leetcode.com/problems/swap-salary/description/

update salary set sex = case sex 
when 'm' then 'f'
else 'm'
end;