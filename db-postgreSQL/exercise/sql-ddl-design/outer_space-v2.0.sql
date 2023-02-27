DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space
CREATE TABLE "stars" (
    "id" integer NOT NULL,
    "name" integer NOT NULL,
    "galaxy_id" integer NOT NULL
);

ALTER TABLE "stars"
    ADD PRIMARY KEY ("id");

CREATE TABLE "planet" (
    "id" integer NOT NULL,
    "galaxy_id" integer NOT NULL,
    "start_id" integer NOT NULL,
    "name" varchar(255) NOT NULL,
    "orbital_period_year" integer NOT NULL
);

ALTER TABLE "planet"
    ADD PRIMARY KEY ("id");

CREATE TABLE "moon" (
    "id" integer NOT NULL,
    "planet_id" integer NOT NULL,
    "name" varchar(255) NOT NULL,
    "orbit_days" integer NOT NULL
);

ALTER TABLE "moon"
    ADD PRIMARY KEY ("id");

CREATE TABLE "galaxy" (
    "id" integer NOT NULL,
    "name" varchar(255) NOT NULL
);

ALTER TABLE "galaxy"
    ADD PRIMARY KEY ("id");

ALTER TABLE "planet"
    ADD CONSTRAINT "planet_start_id_foreign" FOREIGN KEY ("start_id") REFERENCES "stars" ("id");

ALTER TABLE "planet"
    ADD CONSTRAINT "planet_galaxy_id_foreign" FOREIGN KEY ("galaxy_id") REFERENCES "galaxy" ("id");

ALTER TABLE "moon"
    ADD CONSTRAINT "moon_planet_id_foreign" FOREIGN KEY ("planet_id") REFERENCES "planet" ("id");

ALTER TABLE "stars"
    ADD CONSTRAINT "stars_galaxy_id_foreign" FOREIGN KEY ("galaxy_id") REFERENCES "galaxy" ("id");

