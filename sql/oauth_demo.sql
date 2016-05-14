-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2016 at 03:56 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oauth_demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` int(14) NOT NULL,
  `access_token` varchar(256) DEFAULT NULL,
  `expires` datetime DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `client_id` int(14) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `access_token`, `expires`, `scope`, `client_id`, `user_id`) VALUES
(1, '81b011b7f3a903f4e30a19988c8985a16f22d64f', '2016-05-14 19:09:56', NULL, NULL, NULL),
(2, '35d35de511f004fa4132fff79cf0bcf9f03f1c49', '2016-05-14 19:10:34', NULL, NULL, NULL),
(3, 'f70252ff1b57493a5eaf27212b72cd24f12cf764', '2016-05-14 19:12:30', NULL, NULL, 1),
(4, 'aefdf36e9ff2947f121e15cbe2680fc309ebd945', '2016-05-14 19:17:06', NULL, NULL, NULL),
(5, '40898bede94699b0385878c6d37d0284e59e2abf', '2016-05-14 19:17:25', NULL, NULL, NULL),
(6, '4b1d4673bda41926c065a9acb0b3e7bb31f5ea24', '2016-05-14 19:18:04', NULL, NULL, NULL),
(7, '0143e8f0d9f3ccc43c62aa87c38c40f23a5e9ba4', '2016-05-14 19:19:50', NULL, NULL, NULL),
(8, '8c5234b1372c2b78b4d96f3b6f5db8932fa29762', '2016-05-14 19:25:40', NULL, NULL, NULL),
(9, '61fe2c5b0faf9ff96334356b1527ba73b190fa3d', '2016-05-14 19:26:25', NULL, NULL, NULL),
(10, 'b6c9212f29909ec5db9dbeaa4e80f71b507df37f', '2016-05-14 19:27:31', NULL, NULL, 1),
(11, '4185ab5b52452ae295c3011f04c8c13c4115d325', '2016-05-14 19:28:36', NULL, NULL, 1),
(12, '253734e26e1ec8d7389d23458eedf06d6cb50392', '2016-05-14 19:30:06', NULL, 1, 1),
(13, '8161e39caa925cc069e0e709de840fd30be9b7eb', '2016-05-14 19:31:30', NULL, 1, 1),
(14, 'a602543f6bdd6092779939bf1de2299a905dbfec', '2016-05-14 19:31:55', NULL, 1, 1),
(15, '25263fd984cdb089b866608e91c5c17fbc7662a9', '2016-05-14 19:32:07', NULL, 1, 1),
(16, '009adb36c0b2c8d4269676908562fe0a5f0169c3', '2016-05-14 19:32:40', NULL, 1, 1),
(17, '11e3209ea6a793011f7296d566840edf20ac8cd9', '2016-05-14 19:34:00', NULL, 1, 1),
(18, '8226f459dd246a9d1b66ae6671572c38e03a5c57', '2016-05-14 19:34:38', NULL, 1, 1),
(19, '1ca9fe68115a5ecb441af33d8b29ed8fd4aa20d0', '2016-05-14 19:36:38', 'consultant', 1, 1),
(20, '15397cb9904a954a31e162f7635adffb554293ef', '2016-05-14 19:37:14', 'consultant', 1, 1),
(21, '691199101e65b704befca81cb811800aaa8e2ab5', '2016-05-14 19:37:17', 'consultant', 1, 1),
(22, '9c9a78392f164542071d3d3ec8bf8e99e8909ffa', '2016-05-14 19:46:13', NULL, 1, 1),
(23, '06a158438f7685f77b514dd79349af0748a0ba4b', '2016-05-14 19:47:08', NULL, 1, 1),
(24, '2ed79b5743f81418a8da0c5825d67e36be570466', '2016-05-14 19:47:27', NULL, 1, 1),
(25, '4f65fe82d3f9f167328646d710d080f3b270990b', '2016-05-14 19:48:24', NULL, 1, 1),
(26, '0327759746fe5be483943c64eaa018de2d1b72b8', '2016-05-14 19:48:38', NULL, 1, 1),
(27, '9000675b1e23427d7933ea42865605464d1d5600', '2016-05-14 19:51:06', NULL, 1, 1),
(28, 'e3476d9a25cde4ba533c32b4fbd172f55adef84b', '2016-05-14 19:52:41', NULL, 1, 1),
(29, 'a6116f80d7e174e25922912aaed3e5f5972bdfc0', '2016-05-14 19:54:47', NULL, 1, 1),
(30, '21d6074e3b1657f088ea233ece902022e8161910', NULL, NULL, 1, 1),
(31, '83a3a6e42e160716f4c534d1c61f87d78bdf2204', '2016-05-14 19:59:00', NULL, 1, 1),
(32, 'dfc39e4194313191c13a86cbc9d34ca7ffda8b49', '2016-05-14 19:59:03', 'consultant', 1, 1),
(33, '635399997087ef64b813957e20b542ae407c229f', '2016-05-14 19:59:05', NULL, 1, 1),
(34, '4095857d971198669fe3a92a9be2d9f08fa4b09b', '2016-05-14 19:59:10', NULL, 1, 1),
(35, 'b36eaf38995433675531c99abb977199a1b36530', NULL, NULL, 1, 1),
(36, '5a815d1bf7f87cd9465e4599876ce32acfa8bdad', '2016-05-14 20:14:11', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_authorization_codes`
--

CREATE TABLE `oauth_authorization_codes` (
  `id` int(14) NOT NULL,
  `authorization_code` varchar(256) DEFAULT NULL,
  `expires` datetime DEFAULT NULL,
  `redirect_uri` varchar(2000) DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `client_id` int(14) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_authorization_codes`
--

INSERT INTO `oauth_authorization_codes` (`id`, `authorization_code`, `expires`, `redirect_uri`, `scope`, `client_id`, `user_id`) VALUES
(1, NULL, '2016-05-14 18:45:02', NULL, NULL, NULL, 1),
(2, NULL, '2016-05-14 18:45:10', NULL, NULL, NULL, 1),
(3, NULL, '2016-05-14 18:45:15', NULL, NULL, NULL, 1),
(4, NULL, '2016-05-14 18:45:41', NULL, NULL, NULL, 1),
(5, NULL, '2016-05-14 18:46:59', NULL, NULL, NULL, 1),
(6, NULL, '2016-05-14 18:47:22', NULL, NULL, NULL, 1),
(7, NULL, '2016-05-14 18:51:16', NULL, NULL, NULL, 1),
(8, NULL, '2016-05-14 18:52:10', NULL, NULL, NULL, 1),
(9, NULL, '2016-05-14 18:52:33', NULL, NULL, NULL, 1),
(10, NULL, '2016-05-14 18:54:20', NULL, NULL, 1, 1),
(11, NULL, '2016-05-14 18:56:08', NULL, NULL, 1, 1),
(12, NULL, '2016-05-14 18:57:44', NULL, NULL, 1, 1),
(13, '513418e2d3a7f6ab72a63100a298d9ddb8ad0b8e', '2016-05-14 18:59:49', NULL, NULL, 1, 1),
(14, '993fa8fe3be5691baa73801e31420f406b1516f8', '2016-05-14 19:04:08', NULL, NULL, 1, 1),
(15, 'e78351c1b13dc09a3c51d24123b2dfb2bf178306', '2016-05-14 19:04:25', NULL, NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(14) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `client_id` varchar(80) DEFAULT NULL,
  `client_secret` varchar(80) DEFAULT NULL,
  `redirect_uri` varchar(2000) DEFAULT NULL,
  `grant_types` varchar(80) DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `name`, `client_id`, `client_secret`, `redirect_uri`, `grant_types`, `scope`, `user_id`) VALUES
(1, NULL, 'democlient', 'democlientsecret', 'http://localhost/cb', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` int(14) NOT NULL,
  `refresh_token` varchar(256) DEFAULT NULL,
  `expires` datetime DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `client_id` int(14) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_refresh_tokens`
--

INSERT INTO `oauth_refresh_tokens` (`id`, `refresh_token`, `expires`, `scope`, `client_id`, `user_id`) VALUES
(1, '6beb7f8b4b7ab60fe123e0430a3f7081da486152', '2016-05-28 18:09:56', NULL, NULL, NULL),
(2, '5dcdbd119a19f3655cc8e247c2f5165822d24399', '2016-05-28 18:10:34', NULL, NULL, NULL),
(3, '3879deb38e38a12a5f5f75ecd142cfcdad00384b', '2016-05-28 18:17:06', NULL, NULL, NULL),
(4, '51021e085ceb17f66701b3f736a1150eadf89ae1', '2016-05-28 18:17:25', NULL, NULL, NULL),
(5, '6658a45a863123535b5331898aa6da44bc352379', '2016-05-28 18:18:04', NULL, NULL, NULL),
(6, 'c28a74b985cc5d95a71d1344c91f40a0e24fc19b', '2016-05-28 18:19:50', NULL, 1, NULL),
(7, '73c49f0adb6ebcb1903245653bb2377ec5dcd31e', '2016-05-28 18:25:40', NULL, 1, NULL),
(8, 'bd5a641e7dce63a11c34a7740a74cf7e1223a1da', '2016-05-28 18:26:25', NULL, 1, NULL),
(9, 'f033a1cc559762ad8ba05244054a8f465a3b8b28', '2016-05-28 18:27:31', NULL, 1, 1),
(10, 'bb67c127cd9653899089eea0938e0da97372056d', '2016-05-28 18:28:36', NULL, 1, 1),
(11, '0e9f3e2dfd02205c7dba197cf54c1cff432ea6fd', '2016-05-28 18:30:06', NULL, 1, 1),
(12, '5b05a19d83ffb4f0559e9df464983deeae87e486', '2016-05-28 18:31:30', NULL, 1, 1),
(13, '929df161fe9921a0e4750de3c532036f99e40fe7', '2016-05-28 18:31:55', NULL, 1, 1),
(14, 'd96008566a2e84aecb403d869e2ea362f88221fc', '2016-05-28 18:32:07', NULL, 1, 1),
(15, 'f4f1a52886d564aa80fcae8eafcabef579a1feb0', '2016-05-28 18:32:40', NULL, 1, 1),
(16, 'd7df4d8bf5472131d3e5d032b5884c65b9a2f65a', '2016-05-28 18:34:00', NULL, 1, 1),
(20, '8ab0c52713e3cb055d7bab949d34806a2807d084', '2016-05-28 18:37:17', 'consultant', 1, 1),
(21, '2b11b4e4559a42f2d9ccbdf7b1ba4c83b79f015e', '2016-05-28 18:47:27', NULL, 1, 1),
(22, '2dfd5a0303b1b7444445fd82287076bcdd535e44', NULL, NULL, 1, 1),
(24, '59d66d169923ae3c26bcccbe9b2d893279efd62e', '2016-05-28 18:59:03', 'consultant', 1, 1),
(25, 'ce3a313e9a98c9cbbe80b0b243d3f9f19d5bb1cb', NULL, NULL, 1, 1),
(26, 'aacfcc24f97b0a8f4455d7c67017a72159d78f79', '2016-05-28 19:14:11', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_scopes`
--

CREATE TABLE `oauth_scopes` (
  `id` int(11) NOT NULL,
  `scope` varchar(80) DEFAULT NULL,
  `is_default` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_scopes`
--

INSERT INTO `oauth_scopes` (`id`, `scope`, `is_default`) VALUES
(1, 'profile', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(32) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `scope`) VALUES
(1, 'admin', 'admin', 'profile');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `oauth_access_tokens_id_unique` (`id`),
  ADD KEY `oauth_client_id` (`client_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `oauth_authorization_codes`
--
ALTER TABLE `oauth_authorization_codes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `oauth_authorization_codes_id_unique` (`id`),
  ADD KEY `oauth_client_id` (`client_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `oauth_clients_id_unique` (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `oauth_refresh_tokens_id_unique` (`id`),
  ADD KEY `client_id` (`client_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `oauth_scopes`
--
ALTER TABLE `oauth_scopes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `oauth_scopes_id_unique` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `users_id_unique` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `oauth_authorization_codes`
--
ALTER TABLE `oauth_authorization_codes`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `oauth_scopes`
--
ALTER TABLE `oauth_scopes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD CONSTRAINT `oauth_access_tokens_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `oauth_clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `oauth_access_tokens_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `oauth_authorization_codes`
--
ALTER TABLE `oauth_authorization_codes`
  ADD CONSTRAINT `oauth_authorization_codes_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `oauth_clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `oauth_authorization_codes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD CONSTRAINT `oauth_clients_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD CONSTRAINT `oauth_refresh_tokens_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `oauth_clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `oauth_refresh_tokens_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
