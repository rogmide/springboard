DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE "album" (
    "id" integer NOT NULL,
    "producer_id" integer NOT NULL,
    "artists_id" integer NOT NULL,
    "title" text NOT NULL,
    "album_name" integer NOT NULL,
    "duration" integer NOT NULL,
    "album_release_date" date NOT NULL
);

ALTER TABLE "album"
    ADD PRIMARY KEY ("id");

CREATE TABLE "artists" (
    "id" integer NOT NULL,
    "first_name" varchar(255) NOT NULL,
    "last_name" varchar(255) NOT NULL,
    "artistic_name" text NULL
);

ALTER TABLE "artists"
    ADD PRIMARY KEY ("id");

CREATE TABLE "producers" (
    "id" integer NOT NULL,
    "pro_name" varchar(255) NOT NULL
);

ALTER TABLE "producers"
    ADD PRIMARY KEY ("id");

CREATE TABLE "song" (
    "id" integer NOT NULL,
    "album_id" integer NOT NULL,
    "title" text NOT NULL,
    "duration" integer NOT NULL,
    "release_date" date NOT NULL
);

ALTER TABLE "song"
    ADD PRIMARY KEY ("id");

ALTER TABLE "album"
    ADD CONSTRAINT "album_producer_id_foreign" FOREIGN KEY ("producer_id") REFERENCES "producers" ("id");

ALTER TABLE "album"
    ADD CONSTRAINT "album_artists_id_foreign" FOREIGN KEY ("artists_id") REFERENCES "artists" ("id");

ALTER TABLE "song"
    ADD CONSTRAINT "song_album_id_foreign" FOREIGN KEY ("album_id") REFERENCES "album" ("id");

