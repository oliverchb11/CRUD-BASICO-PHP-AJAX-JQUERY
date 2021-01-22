-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2021 a las 18:45:50
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `task-app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `name_task` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `description_task` text COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `task`
--

INSERT INTO `task` (`id`, `name_task`, `description_task`) VALUES
(1, 'OLIVER CHARRY', 'oliver charry the best'),
(5, 'dancing', 'i love dancing'),
(6, 'dancing', 'i love dancing'),
(7, 'driving', 'I am driving'),
(8, 'caminar', 'ME GUSTA CAMINAR'),
(17, 'jugar tenis', 'me gusta jugar tenis'),
(18, 'dancing', 'i love dancing'),
(19, 'nstoreama2207', 'sasasa'),
(20, 'dddd', 'ddddd'),
(24, '43', '43'),
(25, '44', '44'),
(26, '45', '45'),
(27, '45', 'ggg'),
(28, '33', '33'),
(29, 'dd', 'ddddd'),
(30, 'dddd', 'dddd'),
(31, 'ddddd', 'ddddd'),
(32, 'dddd', 'dddddd'),
(33, 'dddd', 'ddddd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
