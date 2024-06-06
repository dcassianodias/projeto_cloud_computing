ALTER TABLE produtos
ALTER COLUMN ativo TYPE boolean
USING CASE WHEN ativo = 1 THEN true ELSE false END;