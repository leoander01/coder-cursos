SELECT e.nome AS Estado, c.nome AS Cidades, regiao AS Regiào FROM estados e, cidades c WHERE e.id = estado_id

SELECT c.nome AS Cidade, e.nome AS Estado, regiao AS Região FROM estados e INNER JOIN cidades c ON e.id = estado_id