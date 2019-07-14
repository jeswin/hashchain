CREATE TABLE "log" (
    "id" character varying (64) NOT NULL,
    "created_by" character varying (64) NOT NULL,
    "timestamp" bigint NOT NULL,
    CONSTRAINT "log_pkey" 
        PRIMARY KEY ("id"));

CREATE TABLE "resource" (
    "id" character varying (64) NOT NULL,
    "timestamp" bigint NOT NULL,
    CONSTRAINT "resource_pkey" 
        PRIMARY KEY ("id"));

CREATE TABLE "resource_permission" (
    "resource_id" character varying (64) NOT NULL,
    "user_id" character varying (64) NOT NULL,
    "read" character(1) NOT NULL,
    "write" character(1) NOT NULL,
    "execute" character(1) NOT NULL,
    "timestamp" bigint NOT NULL,
    CONSTRAINT "resource_permission_pkey" 
        PRIMARY KEY ("resource_id", "user_id"),
    CONSTRAINT "resource_permission_resource_id_fkey" 
        FOREIGN KEY ("resource_id") 
        REFERENCES "resource" ("id"));

