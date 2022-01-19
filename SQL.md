# Anteckningar - SQL-frågor och kommandon

## Starta MySQL
sudo service mysql restart

## MySQL
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost'; (Skapar konto)

mysql -u username -p (Logga in i databasen)

use mysql 

show databases; (Visar databaser)

show tables (En jättelång lista)

SELECT * from user; (Visar innehåll i databasen)

create database [namn] (Skapar en databas)

### Exempel på databas-skapande

CREATE TABLE users (id INT UNSIGNED AUTO_INCREMENT, PRIMARY KEY(id)) ENGINE = innodb CHARACTER SET 'utf8mb4';

describe users;

ALTER TABLE users ADD name VARCHAR (140) NOT NULL; (0> namn <=140)

INSERT INTO users (name) VALUES ('Joe Hanzen TM'); (Sätter värde på users name)

## QoL
grep mysql (Hämtar alla mysql kommandon som använts)
![Kommando-nummer] (Hämtar kommandot)

# Anteckningar - Databas

Databas -> Tables (Tabell) -> Columns -> Rows

Databasen har tabeller
Tabellen har kolumner med information som skrivs i rader.
Kolumner är fält, har namn. Ex. ID + Name + password + email. I kolumnerna kan namn sättas in.

Jens guide på github: https://github.com/jensnti/wsp1-mysql

Jens guide på Jens sida: https://jens-andreasson.gitbook.io/webbserverprogrammering/utvecklarmiljo/wsl