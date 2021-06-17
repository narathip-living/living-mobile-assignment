CREATE DATABASE store_database;

--\c store_database

CREATE TABLE category(
    category_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    store_id uuid NOT NULL,
    FOREIGN KEY(store_id) 
	    REFERENCES store(store_id)
);