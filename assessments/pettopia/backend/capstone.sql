\echo 'Delete and recreate capstone db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE capstone;
CREATE DATABASE capstone;
\connect capstone

\i capstone-schema.sql
\i capstone-seed.sql

\echo 'Delete and recreate capstone db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE capstone_test;
CREATE DATABASE capstone_test;
\connect capstone_test

\i capstone-schema.sql
