DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE "galaxy"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "galaxy" ADD PRIMARY KEY("id");
CREATE TABLE "planet"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "galaxy_id" INTEGER NOT NULL
);
ALTER TABLE
    "planet" ADD PRIMARY KEY("id");
CREATE TABLE "moon"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "moon" ADD PRIMARY KEY("id");
CREATE TABLE "orbital_period_around"(
    "id" INTEGER NOT NULL,
    "orbital_yr" INTEGER NOT NULL,
    "planet_id" INTEGER NULL,
    "moon_id" INTEGER NULL,
    "star_id" INTEGER NULL,
    "do_orbits" BOOLEAN NOT NULL
);
ALTER TABLE
    "orbital_period_around" ADD PRIMARY KEY("id");
CREATE TABLE "stars"(
    "id" INTEGER NOT NULL,
    "name" INTEGER NOT NULL,
    "description" INTEGER NOT NULL,
    "galaxy_id" INTEGER NOT NULL
);
ALTER TABLE
    "stars" ADD PRIMARY KEY("id");
ALTER TABLE
    "orbital_period_around" ADD CONSTRAINT "orbital_period_around_moon_id_foreign" FOREIGN KEY("moon_id") REFERENCES "moon"("id");
ALTER TABLE
    "planet" ADD CONSTRAINT "planet_galaxy_id_foreign" FOREIGN KEY("galaxy_id") REFERENCES "galaxy"("id");
ALTER TABLE
    "stars" ADD CONSTRAINT "stars_galaxy_id_foreign" FOREIGN KEY("galaxy_id") REFERENCES "galaxy"("id");
ALTER TABLE
    "orbital_period_around" ADD CONSTRAINT "orbital_period_around_planet_id_foreign" FOREIGN KEY("planet_id") REFERENCES "planet"("id");
ALTER TABLE
    "orbital_period_around" ADD CONSTRAINT "orbital_period_around_star_id_foreign" FOREIGN KEY("star_id") REFERENCES "stars"("id");