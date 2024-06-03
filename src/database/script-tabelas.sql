-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database metallica;
use metallica;

CREATE TABLE usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45) not null unique,
    senha varchar(45) not null);

select * from usuario;

CREATE TABLE respostasQuiz(
	idRespostasQuiz int auto_increment,
    fkUsuario int,
    constraint pkComposta primary key (idRespostasQuiz, fkUsuario),
    qtdRespostasCorretas int,
    qtdRespostasErradas int,
    constraint checkUsuario foreign key (fkUsuario) references usuario(idUsuario)
    );
    
select * from respostasQuiz;
    
SELECT nome, max(qtdRespostasCorretas) FROM usuario 
                    JOIN respostasQuiz ON idUsuario = fkUsuario 
                    GROUP BY idUsuario;

INSERT INTO respostasQuiz VALUES
	(null, 1, 7, 3),
    (null, 2, 4, 6),
    (null, 3, 5, 5);
   
CREATE TABLE pontuacaoJogo(
	idPontuacaoJogo int auto_increment,
    fkUsuario int,
    constraint pkComposta primary key (idPontuacaoJogo, fkUsuario),
    pontos int,
    maiorPontuacao int,
    menorPontuacao int,
    constraint checkUsuarioJogo foreign key (fkUsuario) references usuario(idUsuario)
    );