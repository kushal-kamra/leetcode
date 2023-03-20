-- 1667. Fix Names in a Table
-- https://leetcode.com/problems/fix-names-in-a-table/

select
    user_id, CONCAT(UPPER(SUBSTR(name, 1, 1)), LOWER(SUBSTR(name, 2))) as name
from users
order by user_id asc;