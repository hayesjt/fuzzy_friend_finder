DROP DATABASE IF EXISTS database_development;

CREATE DATABASE database_development;

USE database_development;

CREATE TABLE `pets` (
    `pets_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `pet_type` varchar(255),
    `breed` varchar(255),
    `status` varchar(255),
    `age` varchar(255),
    `size` varchar(255),
    `sex` varchar(255),
    `good_with_dogs` BOOLEAN,
    `good_with_cats` BOOLEAN,
    `good_with_kids` BOOLEAN,
    `indoor_or_outdoor` varchar(255),
    `housetrained` BOOLEAN,
    `description` varchar(255) NOT NULL,
    `date_surrendered` datetime DEFAULT NULL,
    `date_adopted` datetime DEFAULT NULL,
    `date_deceased` datetime DEFAULT NULL,
    `notes` varchar(255) DEFAULT NULL,
    `attention` varchar(255) DEFAULT NULL,
    `image` varchar(255) NOT NULL,
    PRIMARY KEY (`pets_id`)
);