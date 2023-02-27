DROP DATABASE IF EXISTS soccer_league;

CREATE DATABASE soccer_league;

\c soccer_league

CREATE TABLE "season" (
    "id" integer NOT NULL,
    "start_date" date NOT NULL,
    "end_date" date NOT NULL
);

ALTER TABLE "season"
    ADD PRIMARY KEY ("id");

CREATE TABLE "goal" (
    "id" integer NOT NULL,
    "player_id" integer NOT NULL,
    "game_id" integer NOT NULL
);

ALTER TABLE "goal"
    ADD PRIMARY KEY ("id");

CREATE TABLE "game" (
    "id" integer NOT NULL,
    "date" date NOT NULL,
    "location" text NOT NULL,
    "team1_id" integer NOT NULL,
    "team2_id" integer NOT NULL,
    "season_id" integer NOT NULL,
    "main_referess_id" integer NOT NULL,
    "linesmen_referees_1_id" integer NOT NULL,
    "linesmen_referees_2_id" integer NOT NULL,
    "game_result" text NOT NULL
);

ALTER TABLE "game"
    ADD PRIMARY KEY ("id");

CREATE TABLE "lineup" (
    "id" integer NOT NULL,
    "player_id" integer NOT NULL,
    "game_id" integer NOT NULL,
    "team_id" integer NOT NULL
);

ALTER TABLE "lineup"
    ADD PRIMARY KEY ("id");

ALTER TABLE "lineup"
    ADD CONSTRAINT "lineup_player_id_unique" UNIQUE ("player_id");

ALTER TABLE "lineup"
    ADD CONSTRAINT "lineup_game_id_unique" UNIQUE ("game_id");

ALTER TABLE "lineup"
    ADD CONSTRAINT "lineup_team_id_unique" UNIQUE ("team_id");

CREATE TABLE "referees" (
    "id" integer NOT NULL,
    "first_name" integer NOT NULL,
    "last_name" integer NOT NULL,
    "main_referee" boolean NOT NULL
);

ALTER TABLE "referees"
    ADD PRIMARY KEY ("id");

CREATE TABLE "team" (
    "id" integer NOT NULL,
    "team_name" text NOT NULL,
    "team_city" text NOT NULL,
    "head_coach" text NOT NULL
);

ALTER TABLE "team"
    ADD PRIMARY KEY ("id");

CREATE TABLE "player" (
    "id" integer NOT NULL,
    "first_name" integer NOT NULL,
    "last_name" integer NOT NULL,
    "player_number" integer NOT NULL,
    "team_id" integer NOT NULL,
    "birthday" date NOT NULL,
    "weight" integer NOT NULL,
    "height" integer NOT NULL
);

ALTER TABLE "player"
    ADD PRIMARY KEY ("id");

ALTER TABLE "goal"
    ADD CONSTRAINT "goal_game_id_foreign" FOREIGN KEY ("game_id") REFERENCES "game" ("id");

ALTER TABLE "player"
    ADD CONSTRAINT "player_team_id_foreign" FOREIGN KEY ("team_id") REFERENCES "team" ("id");

ALTER TABLE "lineup"
    ADD CONSTRAINT "lineup_game_id_foreign" FOREIGN KEY ("game_id") REFERENCES "game" ("id");

ALTER TABLE "lineup"
    ADD CONSTRAINT "lineup_team_id_foreign" FOREIGN KEY ("team_id") REFERENCES "team" ("id");

ALTER TABLE "lineup"
    ADD CONSTRAINT "lineup_id_foreign" FOREIGN KEY ("id") REFERENCES "player" ("id");

ALTER TABLE "game"
    ADD CONSTRAINT "game_season_id_foreign" FOREIGN KEY ("season_id") REFERENCES "season" ("id");

ALTER TABLE "game"
    ADD CONSTRAINT "game_team1_id_foreign" FOREIGN KEY ("team1_id") REFERENCES "team" ("id");

ALTER TABLE "goal"
    ADD CONSTRAINT "goal_player_id_foreign" FOREIGN KEY ("player_id") REFERENCES "player" ("id");

ALTER TABLE "game"
    ADD CONSTRAINT "game_main_referess_id_foreign" FOREIGN KEY ("main_referess_id") REFERENCES "referees" ("id");

