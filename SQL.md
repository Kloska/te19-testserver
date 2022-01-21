# Anteckningar - SQL-frågor och kommandon

## Starta MySQL
sudo service mysql restart

## MySQL
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost'; (Skapar konto)

sudo service mysql restart;

mysql -u username -p (Logga in i databasen)

use mysql 

show databases; (Visar databaser)

show tables (En jättelång lista)

SELECT * from user; (Visar innehåll i databasen)

create database [namn] (Skapar en databas)

CREATE TABLE namn (id)...;

ALTER TABLE namn ADD/MODIFY/DROP namn (modifiering); (Skapar/ändrar/tar bort något i det table man anger)

insert into dbnamn 

select * from TABLE (väljer alla fält från tabellen)

delete from (dbnamn) WHERE id = 5; (Tar bort en row från table med id 5)

### Exempel på databas-skapande

CREATE TABLE users (id INT UNSIGNED AUTO_INCREMENT, PRIMARY KEY(id)) ENGINE = innodb CHARACTER SET 'utf8mb4';

describe users;

ALTER TABLE users ADD name VARCHAR (140) NOT NULL; (0> namn <=140)

INSERT INTO users (name) VALUES ('Joe Hanzen TM'); (Sätter värde på users name)

## QoL
grep mysql (Hämtar alla mysql kommandon som använts)
![Kommando-nummer] (Hämtar kommandot)

## REST (vet inte riktigt vad det är)
BASE URL /tasks
GET / - Get all tasks
POST / - Create a new task
GET /:id -Get task by id
PUT /:id - Update a tasky by id
DELETE /:id - Delete a task by id

# Anteckningar - Databas

Databas -> Tables (Tabell) -> Columns -> Rows

Databasen har tabeller
Tabellen har kolumner med information som skrivs i rader.
Kolumner är fält, har namn. Ex. ID + Name + password + email. I kolumnerna kan namn sättas in.

Jens guide på github: https://github.com/jensnti/wsp1-mysql

Jens guide på Jens sida: https://jens-andreasson.gitbook.io/webbserverprogrammering/utvecklarmiljo/wsl