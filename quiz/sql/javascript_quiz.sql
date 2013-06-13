-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2013 at 06:02 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `javascript_quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE IF NOT EXISTS `results` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `minutes` varchar(255) NOT NULL,
  `seconds` varchar(255) NOT NULL,
  `percentage` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `first_name`, `last_name`, `email`, `minutes`, `seconds`, `percentage`, `date`) VALUES
(3, '', '', 'fahim@gmx.com', '34', '57', '0', '1918-11-22 08:12:20'),
(4, '', '', 'fahim@gmx.com', '34', '52', '0', '1918-11-22 08:12:20'),
(5, '', '', 'fahim@gmx.com', '34', '52', '0', '1918-11-22 08:12:20'),
(6, '', '', 'fahim@gmx.com', '34', '55', '200', '1918-11-22 08:12:20'),
(7, '', '', 'fahim@gmx.com', '34', '55', '100', '1918-11-22 08:12:20'),
(8, '', '', 'fahim@gmx.com', '34', '55', '0', '1918-11-22 08:12:20'),
(9, '', '', 'fahim@gmx.com', '34', '55', '200', '1918-11-22 08:12:20'),
(10, '', '', 'fahim@gmx.com', '34', '55', '50', '1918-11-22 08:12:20'),
(11, '', '', 'fahim@gmx.com', '34', '55', '50', '1918-11-22 08:12:20'),
(12, '', '', 'fahim@gmx.com', '34', '55', '50', '1918-11-22 08:12:20'),
(13, '', '', 'fahim@gmx.com', '34', '55', '100', '1918-11-22 08:12:20'),
(14, '', '', 'fahim@gmx.com', '34', '55', '100', '1918-11-22 08:12:20'),
(15, '', '', 'fahim@gmx.com', '34', '58', '100', '1918-11-22 08:12:20'),
(16, '', '', 'fahim@gmx.com', '34', '57', '50', '1918-11-22 08:12:20'),
(17, '', '', 'fahim@gmx.com', '34', '54', '100', '1918-11-22 08:12:20'),
(18, '', '', 'fahim@gmx.com', '34', '56', '0', '1918-11-22 08:12:20'),
(19, '', '', 'fahim@gmx.com', '34', '56', '50', '1918-11-22 08:12:20'),
(20, '', '', 'fahim@gmx.com', '34', '56', '50', '1918-11-22 08:12:20'),
(21, '', '', 'fahim@gmx.com', '34', '52', '50', '1918-11-22 08:12:20'),
(22, '', '', 'fahim@gmx.com', '34', '45', '50', '1918-11-22 08:12:20'),
(23, '', '', 'fahim@gmx.com', '34', '58', '50', '1918-11-22 08:12:20'),
(24, '', '', 'fahim@gmx.com', '34', '54', '100', '1918-11-22 08:12:20'),
(25, '', '', 'fahim@gmx.com', '34', '57', '50', '1918-11-22 08:12:20'),
(26, '', '', 'fahim@gmx.com', '34', '59', '50', '1918-11-22 08:12:20'),
(27, '', '', 'fahim@gmx.com', '32', '04', '50', '1918-11-22 08:12:20');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
