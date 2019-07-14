import * as pg from "psychopiggy";
import { generate } from "../utils/random";

export type CreateLogResult =
  | {
      created: false;
      reason: string;
    }
  | {
      created: true;
      id: string;
    };

export async function createLog(
): Promise<CreateLogResult> {
  const pool = await pg.getPool();
  const id = generate();
  const params = new pg.Params({
    id,
    timestamp: Date.now()
  });

  try {
    await pool.query(
      `INSERT INTO "log" (${params.columns()}) VALUES (${params.ids()})`,
      params.values()
    );
    return {
      created: true,
      id
    };
  } catch (ex) {
    return {
      created: false,
      reason: "Could not insert data."
    };
  }
}

export type AppendToLogResult =
  | {
      created: false;
      reason: string;
    }
  | {
      created: true;
      id: string;
    };

export async function appendToLog() {
  try {
    await pool.query(
      `INSERT INTO "log" (${params.columns()}) VALUES (${params.ids()})`,
      params.values()
    );
    return {
      created: true,
      id
    };
  } catch (ex) {
    return {
      created: false,
      reason: "Could not insert data."
    };
  }
}
