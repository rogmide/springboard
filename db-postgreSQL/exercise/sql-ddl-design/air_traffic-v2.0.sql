DROP DATABASE IF EXISTS airtraffic;

CREATE DATABASE airtraffic;

\c airtraffic

CREATE TABLE "airline"(
    "id" INTEGER NOT NULL,
    "name" INTEGER NOT NULL,
    "phone_number" INTEGER NOT NULL
);
ALTER TABLE
    "airline" ADD PRIMARY KEY("id");
CREATE TABLE "country"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);
ALTER TABLE
    "country" ADD PRIMARY KEY("id");
CREATE TABLE "customer"(
    "id" INTEGER NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "phone_number" INTEGER NOT NULL
);
ALTER TABLE
    "customer" ADD PRIMARY KEY("id");
CREATE TABLE "airplane"(
    "id" INTEGER NOT NULL,
    "airplane_name" VARCHAR(255) NOT NULL,
    "number_of_seats" INTEGER NOT NULL
);
ALTER TABLE
    "airplane" ADD PRIMARY KEY("id");
CREATE TABLE "city"(
    "id" INTEGER NOT NULL,
    "country_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "air_port_name" TEXT NOT NULL
);
ALTER TABLE
    "city" ADD PRIMARY KEY("id");
CREATE TABLE "ticket"(
    "id" INTEGER NOT NULL,
    "city_from_id" INTEGER NOT NULL,
    "city_to_id" INTEGER NOT NULL,
    "country_from_id" INTEGER NOT NULL,
    "country_to_id" INTEGER NOT NULL,
    "departure_date" DATE NOT NULL,
    "arrival_date" DATE NOT NULL,
    "airplane_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "seat" INTEGER NOT NULL,
    "airline_id" INTEGER NOT NULL
);
ALTER TABLE
    "ticket" ADD PRIMARY KEY("id");
ALTER TABLE
    "ticket" ADD CONSTRAINT "ticket_city_from_id_foreign" FOREIGN KEY("city_from_id") REFERENCES "city"("id");
ALTER TABLE
    "ticket" ADD CONSTRAINT "ticket_airplane_id_foreign" FOREIGN KEY("airplane_id") REFERENCES "airplane"("id");
ALTER TABLE
    "city" ADD CONSTRAINT "city_country_id_foreign" FOREIGN KEY("country_id") REFERENCES "country"("id");
ALTER TABLE
    "ticket" ADD CONSTRAINT "ticket_customer_id_foreign" FOREIGN KEY("customer_id") REFERENCES "customer"("id");
ALTER TABLE
    "ticket" ADD CONSTRAINT "ticket_airline_id_foreign" FOREIGN KEY("airline_id") REFERENCES "airline"("id");
ALTER TABLE
    "ticket" ADD CONSTRAINT "ticket_country_from_id_foreign" FOREIGN KEY("country_from_id") REFERENCES "country"("id");