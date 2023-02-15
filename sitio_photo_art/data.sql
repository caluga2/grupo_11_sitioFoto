-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-02-2023 a las 02:18:22
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sitiofotodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritoproductos`
--

CREATE TABLE `carritoproductos` (
  `carritoProductoID` int(11) NOT NULL,
  `productoID` int(11) NOT NULL,
  `carritoID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritos`
--

CREATE TABLE `carritos` (
  `carritoID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `productoID` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `tipoDeProductoID` int(11) DEFAULT NULL,
  `tamanoDeProductoID` int(11) DEFAULT NULL,
  `fotoProducto` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`productoID`, `nombre`, `descripcion`, `precio`, `tipoDeProductoID`, `tamanoDeProductoID`, `fotoProducto`) VALUES
(8, 'ASDA', 'ASDA', '11.00', 1, 4, NULL),
(9, 'dea', 'asda', '999.00', 3, 4, NULL),
(10, 'ccc', 'ccc', '888.00', 3, 4, NULL),
(11, 'bbs', 'bbs', '776.00', 1, 1, NULL),
(12, 'paisaje 2112', 'paisaje nuevo 1212', '101.00', 2, 4, NULL),
(13, 'wewew', 'wewewe', '44.00', 3, 4, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tamanos`
--

CREATE TABLE `tamanos` (
  `tamanoDeProductoID` int(11) NOT NULL,
  `tamanoDeProducto` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tamanos`
--

INSERT INTO `tamanos` (`tamanoDeProductoID`, `tamanoDeProducto`) VALUES
(1, 'pequeño'),
(2, 'mediano'),
(3, 'grande'),
(4, 'master');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos`
--

CREATE TABLE `tipos` (
  `tipoDeProductoID` int(11) NOT NULL,
  `tipoDeProducto` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tipos`
--

INSERT INTO `tipos` (`tipoDeProductoID`, `tipoDeProducto`) VALUES
(1, 'Prints'),
(2, 'Enmarcados'),
(3, 'Servicios fotograficos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuarioID` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `fotoUsuario` varchar(100) DEFAULT NULL,
  `carritoProductoID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuarioID`, `nombre`, `email`, `contrasena`, `fotoUsuario`, `carritoProductoID`) VALUES
(8, 'ariel', 'nanan@gmail.com', '$2a$10$9jtDhR7Dm8SjnPC9BRSoI.nlit56F6WLDcjScfbn9UK4tQjr8HAyu', NULL, NULL),
(9, 'carolina', 'caro@gmail.com', '$2a$10$WUFOrEn4HgJ7n3TSCn5GfePWD7BLygiFZwojOOasfYY548SCLFFcW', NULL, NULL),
(10, 'cesar', 'cesar@gmail.com', '$2a$10$iUh8a.Gcth3xaIpD1au2Be.M.NRYao462Yzhf5pT4F4CLo4CrAup.', NULL, NULL),
(11, 'nicolas', 'nico@gmail.com', '$2a$10$T8D8uINQctHt/L.7FwLQz.q4aU7EGhhNJQ3gP8gyfI5ONY5HXyfGy', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carritoproductos`
--
ALTER TABLE `carritoproductos`
  ADD PRIMARY KEY (`carritoProductoID`),
  ADD KEY `carritoID_idx` (`carritoID`);

--
-- Indices de la tabla `carritos`
--
ALTER TABLE `carritos`
  ADD PRIMARY KEY (`carritoID`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`productoID`),
  ADD KEY `tipoDeProductoID_idx` (`tipoDeProductoID`),
  ADD KEY `tamanoDeProductoID_idx` (`tamanoDeProductoID`);

--
-- Indices de la tabla `tamanos`
--
ALTER TABLE `tamanos`
  ADD PRIMARY KEY (`tamanoDeProductoID`);

--
-- Indices de la tabla `tipos`
--
ALTER TABLE `tipos`
  ADD PRIMARY KEY (`tipoDeProductoID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuarioID`),
  ADD KEY `Usuarios_idx` (`carritoProductoID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuarioID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carritoproductos`
--
ALTER TABLE `carritoproductos`
  ADD CONSTRAINT `carritoID` FOREIGN KEY (`carritoID`) REFERENCES `carritos` (`carritoID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `tamanoDeProductoID` FOREIGN KEY (`tamanoDeProductoID`) REFERENCES `tamanos` (`tamanoDeProductoID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `tipoDeProductoID` FOREIGN KEY (`tipoDeProductoID`) REFERENCES `tipos` (`tipoDeProductoID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `carritoProductoID` FOREIGN KEY (`carritoProductoID`) REFERENCES `carritoproductos` (`carritoProductoID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
