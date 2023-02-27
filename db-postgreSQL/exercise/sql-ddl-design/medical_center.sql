DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE "visit"(
    "id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "patients_id" INTEGER NOT NULL,
    "diagnosed_id" INTEGER NOT NULL,
    "visit_Date" DATE NOT NULL,
    "time" DATE NOT NULL,
    "notes" TEXT NOT NULL
);
ALTER TABLE
    "visit" ADD PRIMARY KEY("id");
CREATE TABLE "patients"(
    "id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "drinks_smoke_drogs" BOOLEAN NOT NULL
);
ALTER TABLE
    "patients" ADD PRIMARY KEY("id");
CREATE TABLE "doctors"(
    "id" INTEGER NOT NULL,
    "medical_cernter_id" INTEGER NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "specialties" TEXT NOT NULL
);
ALTER TABLE
    "doctors" ADD PRIMARY KEY("id");
CREATE TABLE "medical_center"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "specialties" TEXT NOT NULL
);
ALTER TABLE
    "medical_center" ADD PRIMARY KEY("id");
CREATE TABLE "diagnosed"(
    "id" INTEGER NOT NULL,
    "diseases_id" INTEGER NOT NULL,
    "visit_id" INTEGER NOT NULL,
    "result" TEXT NOT NULL,
    "observations" TEXT NOT NULL
);
ALTER TABLE
    "diagnosed" ADD PRIMARY KEY("id");
CREATE TABLE "diseases"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "treatable" BOOLEAN NOT NULL
);
ALTER TABLE
    "diseases" ADD PRIMARY KEY("id");
ALTER TABLE
    "doctors" ADD CONSTRAINT "doctors_medical_cernter_id_foreign" FOREIGN KEY("medical_cernter_id") REFERENCES "medical_center"("id");
ALTER TABLE
    "visit" ADD CONSTRAINT "visit_doctor_id_foreign" FOREIGN KEY("doctor_id") REFERENCES "doctors"("id");
ALTER TABLE
    "visit" ADD CONSTRAINT "visit_patients_id_foreign" FOREIGN KEY("patients_id") REFERENCES "patients"("id");
ALTER TABLE
    "visit" ADD CONSTRAINT "visit_diagnosed_id_foreign" FOREIGN KEY("diagnosed_id") REFERENCES "diagnosed"("id");
ALTER TABLE
    "diagnosed" ADD CONSTRAINT "diagnosed_diseases_id_foreign" FOREIGN KEY("diseases_id") REFERENCES "diseases"("id");