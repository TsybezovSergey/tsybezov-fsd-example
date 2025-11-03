DO $$
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_database WHERE datname = 'dev'
  ) THEN
    PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE dev OWNER dev');
  END IF;
END $$;

