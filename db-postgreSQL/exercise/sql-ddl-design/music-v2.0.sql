DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE "album"(
    "id" INTEGER NOT NULL,
    "album_name" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "producer_id" INTEGER NOT NULL,
    "song_id" INTEGER NOT NULL,
    "album_release_date" DATE NOT NULL
);
ALTER TABLE
    "album" ADD PRIMARY KEY("id");
CREATE TABLE "song"(
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "release_date" DATE NOT NULL
);
ALTER TABLE
    "song" ADD PRIMARY KEY("id");
CREATE TABLE "producers"(
    "id" INTEGER NOT NULL,
    "pro_name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "producers" ADD PRIMARY KEY("id");
CREATE TABLE "artists"(
    "id" INTEGER NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "alias" TEXT NULL
);
ALTER TABLE
    "artists" ADD PRIMARY KEY("id");
CREATE TABLE "album_artists_song"(
    "id" INTEGER NOT NULL,
    "album_id" INTEGER NOT NULL,
    "song_id" INTEGER NOT NULL,
    "artists_id" INTEGER NOT NULL
);
ALTER TABLE
    "album_artists_song" ADD PRIMARY KEY("id");
ALTER TABLE
    "album_artists_song" ADD CONSTRAINT "album_artists_song_album_id_foreign" FOREIGN KEY("album_id") REFERENCES "album"("id");
ALTER TABLE
    "album" ADD CONSTRAINT "album_producer_id_foreign" FOREIGN KEY("producer_id") REFERENCES "producers"("id");
ALTER TABLE
    "album_artists_song" ADD CONSTRAINT "album_artists_song_artists_id_foreign" FOREIGN KEY("artists_id") REFERENCES "artists"("id");
ALTER TABLE
    "album_artists_song" ADD CONSTRAINT "album_artists_song_song_id_foreign" FOREIGN KEY("song_id") REFERENCES "song"("id");