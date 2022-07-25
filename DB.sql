DROP DATABASE IF EXISTS FinancialAssets;

CREATE DATABASE FinancialAssets;

CREATE TABLE FinancialAssets.Orders(
	orderId INT PRIMARY KEY AUTO_INCREMENT,
  accountId INT NOT NULL,
  assetId INT NOT NULL,
  quantity INT NOT NULL,
  operation VARCHAR(45) NOT NULL
) engine = InnoDB;

CREATE TABLE FinancialAssets.Assets(
	assetId INT PRIMARY KEY AUTO_INCREMENT,
  quantity INT NOT NULL,
  value INT NOT NULL
) engine = InnoDB;

CREATE TABLE FinancialAssets.Clients(
	clientId INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  address VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(10) NOT NULL
) engine = InnoDB;

CREATE TABLE FinancialAssets.Account(
	accountId INT PRIMARY KEY AUTO_INCREMENT,
  balance INT NOT NULL,
  deposit INT NOT NULL,
  withdrawal INT NOT NULL,
  clientId INT NOT NULL,
  FOREIGN KEY (clientId) REFERENCES Clients (clientId)
) engine = InnoDB;

CREATE TABLE FinancialAssets.ClientAssets(
	clientId INT NOT NULL,
  assetId INT NOT NULL,
  quantity INT NOT NULL,
  value INT NOT NULL,
  CONSTRAINT PRIMARY KEY(clientId, assetId),
  FOREIGN KEY (clientId) REFERENCES Clients (clientId),
  FOREIGN KEY (assetId) REFERENCES Assets (assetId)
) engine = InnoDB;

INSERT INTO FinancialAssets.Assets (quantity, value)
VALUES
(300, 50),
(500, 100),
(100, 150),
(400, 70);

INSERT INTO FinancialAssets.Clients (name, address, email, password)
VALUES
('Carolina Santos', 'Rua Sol', 'carolina@gmail.com', 'senha123'),
('Vinicius Tavares', 'Rua Lua', 'vinicius@gmail.com', 'senha456'),
('Isabela Silva', 'Rua Estrela', 'isabela@gmail.com', 'senha789'),
('João Pereira', 'Rua Cometa', 'joao@gmail.com', 'senha012');

INSERT INTO FinancialAssets.Account (balance, deposit, withdrawal, clientId)
VALUES
(5000, 0, 0, 3),
(7000, 0, 0, 1),
(4000, 0, 0, 4),
(5000, 0, 0, 2);
