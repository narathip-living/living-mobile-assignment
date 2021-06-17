CREATE DATABASE store_database;

--\c store_database

CREATE TABLE menu(
    menu_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id uuid NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    FOREIGN KEY(category_id) 
	    REFERENCES category(category_id)
);