DROP DATABASE IF EXISTS livrocaixa;
CREATE DATABASE livrocaixa CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;
USE livrocaixa;

CREATE TABLE lancamentos(
    n_lancamento INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_lancamento DATE NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    valor FLOAT(6,2) NOT NULL,
    tipo VARCHAR(1) NOT NULL
);

DESCRIBE lancamentos;
SHOW TABLES;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/livrocaixa/08-09-2022/docs/lancamentos.csv'
INTO TABLE lancamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

SELECT * FROM lancamentos;