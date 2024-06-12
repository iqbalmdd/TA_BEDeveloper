INSERT INTO parent (id, name, parent_id)
VALUES
    (1, 'Zaki', 2),
    (2, 'Ilham', null),
    (3, 'Irwan', 2),
    (4, 'Arka', 3);

SELECT 
	p1.id,
	p1.name,
	p2.name AS parent_name
FROM parent p1
LEFT JOIN parent p2 ON t1.parent_id = p2.id;