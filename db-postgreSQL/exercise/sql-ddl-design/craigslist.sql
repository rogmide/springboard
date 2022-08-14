CREATE TABLE "users"(
    "id" INTEGER NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL
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
    "description" TEXT NOT NULL,
    "userd_id" INTEGER NOT NULL,
    "region_id" INTEGER NOT NULL,
    "location" TEXT NOT NULL
);
ALTER TABLE
    "posts" ADD PRIMARY KEY("id");
CREATE TABLE "category"(
    "id" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "category" ADD PRIMARY KEY("id");
CREATE TABLE "post_category"(
    "id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "posts_id" INTEGER NOT NULL
);
ALTER TABLE
    "post_category" ADD PRIMARY KEY("id");
ALTER TABLE
    "posts" ADD CONSTRAINT "posts_userd_id_foreign" FOREIGN KEY("userd_id") REFERENCES "users"("id");
ALTER TABLE
    "posts" ADD CONSTRAINT "posts_region_id_foreign" FOREIGN KEY("region_id") REFERENCES "region"("id");
ALTER TABLE
    "post_category" ADD CONSTRAINT "post_category_posts_id_foreign" FOREIGN KEY("posts_id") REFERENCES "posts"("id");
ALTER TABLE
    "post_category" ADD CONSTRAINT "post_category_category_id_foreign" FOREIGN KEY("category_id") REFERENCES "category"("id");