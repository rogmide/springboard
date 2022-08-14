DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE "fly_route"(
    "id" INTEGER NOT NULL,
    "city_from_id" INTEGER NOT NULL,
    "city_to_id" INTEGER NOT NULL,
    "country_from_id" INTEGER NOT NULL,
    "country_to_id" INTEGER NOT NULL,
    "departure_date" DATE NOT NULL,
    "arrival_date" DATE NOT NULL,
    "airplane_id" INTEGER NOT NULL
);
ALTER TABLE
    "fly_route" ADD PRIMARY KEY("id");
CREATE TABLE "city"(
    "id" INTEGER NOT NULL,
    "country_id" INTEGER NOT NULL
);
ALTER TABLE
    "city" ADD PRIMARY KEY("id");
CREATE TABLE "country"("id" INTEGER NOT NULL);
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
CREATE TABLE "airplane_customer"(
    "id" INTEGER NOT NULL,
    "ariplane_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "seat_number" TEXT NOT NULL
);
ALTER TABLE
    "airplane_customer" ADD PRIMARY KEY("id");
ALTER TABLE
    "fly_route" ADD CONSTRAINT "fly_route_city_from_id_foreign" FOREIGN KEY("city_from_id") REFERENCES "city"("id");
ALTER TABLE
    "fly_route" ADD CONSTRAINT "fly_route_city_to_id_foreign" FOREIGN KEY("city_to_id") REFERENCES "city"("id");
ALTER TABLE
    "airplane_customer" ADD CONSTRAINT "airplane_customer_ariplane_id_foreign" FOREIGN KEY("ariplane_id") REFERENCES "airplane"("id");
ALTER TABLE
    "fly_route" ADD CONSTRAINT "fly_route_airplane_id_foreign" FOREIGN KEY("airplane_id") REFERENCES "airplane"("id");
ALTER TABLE
    "airplane_customer" ADD CONSTRAINT "airplane_customer_customer_id_foreign" FOREIGN KEY("customer_id") REFERENCES "customer"("id");
ALTER TABLE
    "city" ADD CONSTRAINT "city_country_id_foreign" FOREIGN KEY("country_id") REFERENCES "country"("id");
ALTER TABLE
    "fly_route" ADD CONSTRAINT "fly_route_country_to_id_foreign" FOREIGN KEY("country_to_id") REFERENCES "country"("id");
ALTER TABLE
    "fly_route" ADD CONSTRAINT "fly_route_country_from_id_foreign" FOREIGN KEY("country_from_id") REFERENCES "country"("id");