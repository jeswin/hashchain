import pg = require("pg");
import { join } from "path";
import { readFileSync } from "fs";
import { IDbConfig } from "psychopiggy";
import * as userModule from "../domain/user";

export default function run(dbConfig: IDbConfig, configDir: string) {
  async function selectAndMatchRows(
    table: string,
    count: number,
    rowToMatch: number,
    props: any
  ) {
    const pool = new pg.Pool(dbConfig);
    const { rows } = await pool.query(`SELECT * FROM "${table}"`);
    rows.length.should.equal(count);
    Object.keys(props).forEach(k => {
      props[k].should.equal(rows[rowToMatch][k]);
    });
  }

  describe("domain", async () => {
    async function writeSampleData() {
      const pool = new pg.Pool(dbConfig);

      const sampleDataSQL = readFileSync(
        join(__dirname, "./sample-data.sql")
      ).toString();

      await pool.query(sampleDataSQL);
    }

    it("user.createKeyValuePair() inserts data", async () => {
      // await writeSampleData();
      // const result = await userModule.createKeyValuePair(
      //   "jeswin",
      //   "region",
      //   "india",
      //   "locations"
      // );
      // result.should.deepEqual({ created: true, edit: "insert" });

      // await selectAndMatchRows("kvstore", 2, 1, { key: "region" });
    });
  });
}
