INSERT INTO `tipos` (`tipoDeProductoID`, `tipoDeProducto`) VALUES
(1, 'Prints'),
(2, 'Enmarcados'),
(3, 'Servicios fotograficos');

INSERT INTO `tamanos` (`tamanoDeProductoID`, `tamanoDeProducto`) VALUES
(1, 'pequeño'),
(2, 'mediano'),
(3, 'grande'),
(4, 'master');

INSERT INTO `productos` (`productoID`, `nombre`, `descripcion`, `precio`, `tipoDeProductoID`, `tamanoDeProductoID`, `fotoProducto`) VALUES
(8, 'ASDA', 'ASDA', '11.00', 1, 4, NULL),
(9, 'dea', 'asda', '999.00', 3, 4, NULL),
(10, 'ccc', 'ccc', '888.00', 3, 4, NULL),
(11, 'bbs', 'bbs', '776.00', 1, 1, NULL),
(12, 'paisaje 2112', 'paisaje nuevo 1212', '101.00', 2, 4, NULL),
(13, 'wewew', 'wewewe', '44.00', 3, 4, NULL);

INSERT INTO `usuarios` (`usuarioID`, `nombre`, `email`, `contrasena`, `fotoUsuario`, `carritoProductoID`) VALUES
(8, 'ariel', 'nanan@gmail.com', '$2a$10$9jtDhR7Dm8SjnPC9BRSoI.nlit56F6WLDcjScfbn9UK4tQjr8HAyu', NULL, NULL),
(9, 'carolina', 'caro@gmail.com', '$2a$10$WUFOrEn4HgJ7n3TSCn5GfePWD7BLygiFZwojOOasfYY548SCLFFcW', NULL, NULL),
(10, 'cesar', 'cesar@gmail.com', '$2a$10$iUh8a.Gcth3xaIpD1au2Be.M.NRYao462Yzhf5pT4F4CLo4CrAup.', NULL, NULL),
(11, 'nicolas', 'nico@gmail.com', '$2a$10$T8D8uINQctHt/L.7FwLQz.q4aU7EGhhNJQ3gP8gyfI5ONY5HXyfGy', NULL, NULL);


