WITH T1 AS(
SELECT DISTINCT candidate, year, SUM(candidatevotes) as candidatevotes, 

 FROM `elite-magpie-345213.dataviz.presidential_elections_results` 
 WHERE candidate != ""
 GROUP BY 1,2
),

T2 AS
(
    SELECT T1.*, ROW_NUMBER() over (PARTITION BY T1.year
                ORDER BY T1.candidatevotes DESC) AS rank
    
    FROM
    T1 
),

T3 AS(
    SELECT * FROM T2 
    WHERE Rank <= 10
)

SELECT T.* from T3 LEFT JOIN `elite-magpie-345213.dataviz.presidential_elections_results` T
ON T.candidate = T3.candidate AND T.year = T3.year