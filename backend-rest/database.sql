CREATE DATABASE store_database;

--\c store_database

CREATE TABLE store(
    store_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    rating INT NOT NULL
);