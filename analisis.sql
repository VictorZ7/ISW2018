CREATE DATABASE  IF NOT EXISTS `analisis`;
USE `analisis`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.7.14-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuario`;
DROP TABLE IF EXISTS `orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
 `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
 `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NUll,
 `apellido` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `tipo` int(11) NOT NULL ,
 `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `clave` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `orden` (
 `id_orden` int(11) NOT NULL AUTO_INCREMENT,
 `usuario_id` int(11) NOT NULL,
 `titulo` varchar(100) COLLATE utf8_unicode_ci NOT NULL UNIQUE,
 `detalle` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `estado` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 `fecha` date,
 PRIMARY KEY (`id_orden`),
 CONSTRAINT FK_PersonOrder FOREIGN KEY (usuario_id)
 REFERENCES usuario(id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'vector','zavalaa',1,'victor.zavala.14@sansano.usm.cl','v');
INSERT INTO `usuario` VALUES (2,'giorgio','pellizzari',2,'giorgio.pellizzar.14@sansano.usm.cl','g');
INSERT INTO `usuario` VALUES (3,'victor','zavala',3,'giorgio.pvectorellizzar.14@sansano.usm.cl','123');
INSERT INTO `usuario` VALUES (4,'jorge','zavala',4,'gio.pvectorellizzar.14@sansano.usm.cl','pass');

/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

INSERT INTO `orden` VALUES (1,1,'primera orden','esta es la primera orden','pendiente','2018-05-06');
INSERT INTO `orden` VALUES (2,1,'segunda orden','esta es la segunda orden','pendiente','2018-05-06');
INSERT INTO `orden` VALUES (3,2,'tercera orden','esta es la tercera orden','ejecutando','2018-05-06');

--
-- Dumping events for database 'test'
--

--
-- Dumping routines for database 'test'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-05 21:00:55
