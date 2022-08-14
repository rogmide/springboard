CREATE TABLE "team"(
    "id" INTEGER NOT NULL,
    "team_name" TEXT NOT NULL
);
ALTER TABLE
    "team" ADD PRIMARY KEY("id");
CREATE TABLE "player"(
    "id" INTEGER NOT NULL,
    "first_name" INTEGER NOT NULL,
    "last_name" INTEGER NOT NULL,
    "player_number" INTEGER NOT NULL
);
ALTER TABLE
    "player" ADD PRIMARY KEY("id");
CREATE TABLE "game"(
    "id" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "goal" INTEGER NOT NULL,
    "referees_id" INTEGER NOT NULL,
    "team1_id" INTEGER NOT NULL,
    "team2_id" INTEGER NOT NULL,
    "season_id" INTEGER NOT NULL
);
ALTER TABLE
    "game" ADD PRIMARY KEY("id");
CREATE TABLE "player_team"(
    "id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "player_id" INTEGER NOT NULL
);
ALTER TABLE
    "player_team" ADD PRIMARY KEY("id");
CREATE TABLE "goal"(
    "id" INTEGER NOT NULL,
    "player_id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL
);
ALTER TABLE
    "goal" ADD PRIMARY KEY("id");
CREATE TABLE "referees"(
    "id" INTEGER NOT NULL,
    "first_name" INTEGER NOT NULL,
    "last_name" INTEGER NOT NULL,
    "main_referee" BOOLEAN NOT NULL
);
ALTER TABLE
    "referees" ADD PRIMARY KEY("id");
CREATE TABLE "league"(
    "id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "season_id" INTEGER NOT NULL,
    "league_name" INTEGER NOT NULL
);
ALTER TABLE
    "league" ADD PRIMARY KEY("id");
CREATE TABLE "season"(
    "id" INTEGER NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL
);
ALTER TABLE
    "season" ADD PRIMARY KEY("id");
ALTER TABLE
    "goal" ADD CONSTRAINT "goal_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "game"("id");
ALTER TABLE
    "player_team" ADD CONSTRAINT "player_team_player_id_foreign" FOREIGN KEY("player_id") REFERENCES "player"("id");
ALTER TABLE
    "goal" ADD CONSTRAINT "goal_player_id_foreign" FOREIGN KEY("player_id") REFERENCES "player"("id");
ALTER TABLE
    "player_team" ADD CONSTRAINT "player_team_team_id_foreign" FOREIGN KEY("team_id") REFERENCES "team"("id");
ALTER TABLE
    "game" ADD CONSTRAINT "game_team1_id_foreign" FOREIGN KEY("team1_id") REFERENCES "team"("id");
ALTER TABLE
    "game" ADD CONSTRAINT "game_team2_id_foreign" FOREIGN KEY("team2_id") REFERENCES "team"("id");
ALTER TABLE
    "game" ADD CONSTRAINT "game_referees_id_foreign" FOREIGN KEY("referees_id") REFERENCES "referees"("id");
ALTER TABLE
    "league" ADD CONSTRAINT "league_team_id_foreign" FOREIGN KEY("team_id") REFERENCES "team"("id");
ALTER TABLE
    "game" ADD CONSTRAINT "game_season_id_foreign" FOREIGN KEY("season_id") REFERENCES "season"("id");
ALTER TABLE
    "league" ADD CONSTRAINT "league_season_id_foreign" FOREIGN KEY("season_id") REFERENCES "season"("id");