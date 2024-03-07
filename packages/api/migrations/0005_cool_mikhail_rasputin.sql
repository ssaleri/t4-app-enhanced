CREATE TABLE `BlogPost` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`author` text DEFAULT 'Simone Saleri' NOT NULL,
	`image` text NOT NULL,
	`date` text DEFAULT CURRENT_DATE NOT NULL,
	`tags` text
);
