-- MySQL Script generated by MySQL Workbench
-- Tue Jan 24 22:35:53 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sitioFotodb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sitioFotodb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sitioFotodb` DEFAULT CHARACTER SET utf8 ;
USE `sitioFotodb` ;

-- -----------------------------------------------------
-- Table `sitioFotodb`.`Carritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sitioFotodb`.`Carritos` (
  `carritoID` INT NOT NULL,
  PRIMARY KEY (`carritoID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sitioFotodb`.`CarritoProductos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sitioFotodb`.`CarritoProductos` (
  `carritoProductoID` INT NOT NULL,
  `productoID` INT NOT NULL,
  `carritoID` INT NOT NULL,
  PRIMARY KEY (`carritoProductoID`),
  INDEX `carritoID_idx` (`carritoID` ASC),
  CONSTRAINT `carritoID`
    FOREIGN KEY (`carritoID`)
    REFERENCES `sitioFotodb`.`Carritos` (`carritoID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sitioFotodb`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sitioFotodb`.`Usuarios` (
  `usuarioID` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `fotoUsuario` VARCHAR(100),
  `carritoProductoID` INT /*NOT NULL*/,
  PRIMARY KEY (`usuarioID`),
  INDEX `Usuarios_idx` (`carritoProductoID` ASC),
  CONSTRAINT `carritoProductoID`
    FOREIGN KEY (`carritoProductoID`)
    REFERENCES `sitioFotodb`.`CarritoProductos` (`carritoProductoID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sitioFotodb`.`Tipos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sitioFotodb`.`Tipos` (
  `tipoDeProductoID` INT NOT NULL,
  `tipoDeProducto` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tipoDeProductoID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sitioFotodb`.`Tamanos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sitioFotodb`.`Tamanos` (
  `tamanoDeProductoID` INT NOT NULL,
  `tamanoDeProducto` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tamanoDeProductoID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sitioFotodb`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sitioFotodb`.`Productos` (
  `productoID` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `tipoDeProductoID` INT NULL,
  `tamanoDeProductoID` INT NULL,
  `fotoProducto` VARCHAR(100),
  PRIMARY KEY (`productoID`),
  INDEX `tipoDeProductoID_idx` (`tipoDeProductoID` ASC) ,
  INDEX `tamanoDeProductoID_idx` (`tamanoDeProductoID` ASC) ,
  CONSTRAINT `tipoDeProductoID`
    FOREIGN KEY (`tipoDeProductoID`)
    REFERENCES `sitioFotodb`.`Tipos` (`tipoDeProductoID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `tamanoDeProductoID`
    FOREIGN KEY (`tamanoDeProductoID`)
    REFERENCES `sitioFotodb`.`Tamanos` (`tamanoDeProductoID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;