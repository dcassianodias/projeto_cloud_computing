ALTER TABLE produtos
ADD COLUMN ativo smallint;

UPDATE produtos
SET ativo = 1;