DROP DATABASE IF EXISTS craigslist;

CREATE DATABASE craigslist;

\c craigslist

CREATE TABLE "users"(
    "id" INTEGER NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "pref_region_id" INTEGER NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE "region"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "region" ADD PRIMARY KEY("id");
CREATE TABLE "posts"(
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "userd_id" INTEGER NOT NULL,
    "region_id" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL
);
ALTER TABLE
    "posts" ADD PRIMARY KEY("id");
CREATE TABLE "category"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "category" ADD PRIMARY KEY("id");
ALTER TABLE
    "posts" ADD CONSTRAINT "posts_region_id_foreign" FOREIGN KEY("region_id") REFERENCES "region"("id");
ALTER TABLE
    "posts" ADD CONSTRAINT "posts_userd_id_foreign" FOREIGN KEY("userd_id") REFERENCES "users"("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_pref_region_id_foreign" FOREIGN KEY("pref_region_id") REFERENCES "region"("id");
ALTER TABLE
    "posts" ADD CONSTRAINT "posts_category_id_foreign" FOREIGN KEY("category_id") REFERENCES "category"("id");