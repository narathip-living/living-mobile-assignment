CREATE DATABASE store_database;

--\c store_database

CREATE TABLE store(
    store_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    rating INT NOT NULL
);

CREATE TABLE category(
    category_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    store_id uuid NOT NULL,
    FOREIGN KEY(store_id) 
	    REFERENCES store(store_id)
);

CREATE TABLE menu(
    menu_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id uuid NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    FOREIGN KEY(category_id) 
	    REFERENCES category(category_id)
);