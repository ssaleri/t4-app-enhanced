CREATE TABLE `BlogPost` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`author` text DEFAULT 'Simone Saleri' NOT NULL,
	`image` text NOT NULL,
	`date` text DEFAULT CURRENT_DATE NOT NULL,
	`tags` text
);
--> statement-breakpoint
CREATE TABLE `Car` (
	`id` text PRIMARY KEY NOT NULL,
	`make` text NOT NULL,
	`model` text NOT NULL,
	`year` integer NOT NULL,
	`color` text NOT NULL,
	`price` real NOT NULL,
	`mileage` integer NOT NULL,
	`fuelType` text NOT NULL,
	`transmission` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Ups` (
	`id` text PRIMARY KEY NOT NULL,
	`model` text NOT NULL,
	`year` integer NOT NULL,
	`price` real NOT NULL,
	`wattage` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Person` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`year` integer NOT NULL
);
