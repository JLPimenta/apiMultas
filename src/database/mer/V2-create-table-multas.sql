-- Active: 1668031808645@@localhost@3306@db_api

-- db_api.multas definition

CREATE TABLE
    `multas` (
        `id_multa` int unsigned NOT NULL AUTO_INCREMENT,
        `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `codigo_multa` varchar(20) NOT NULL,
        `tipo_infracao` varchar(15) NOT NULL,
        `veiculo` varchar(45) NOT NULL,
        `placa` varchar(10) NOT NULL,
        `valor_multa` double NOT NULL,
        `quantidade_pontos` int NOT NULL,
        `motorista_responsavel` varchar(50) NOT NULL,
        `status_multa` varchar(15) NOT NULL,
        `registrado_por` varchar(50) DEFAULT NULL,
        `ativo` tinyint(1) NOT NULL,
        PRIMARY KEY (`id_multa`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;