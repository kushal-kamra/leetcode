-- 1484. Group Sold Products By The Date
-- https://leetcode.com/problems/group-sold-products-by-the-date/

select
  sell_date,
  count(distinct(product)) as num_sold,
  group_concat(distinct product order by product asc) as products
from activities
group by sell_date
order by sell_date asc;