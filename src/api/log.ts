import { IRouterContext } from "koa-router";
import { ensureUserId } from "./authUtils";
import * as log from "../domain/log";

/*
  We have to:
    - Define a resource in dreadnought
    - Treat it as a file? /username/id
    - Define permissions for the creator
*/
export async function createLog(ctx: IRouterContext) {
  const createLogResult = await log.createLog();
  return createLogResult.created
    ? (ctx.body = {
        id: createLogResult.id
      })
    : ((ctx.status = 400), (ctx.body = createLogResult.reason));
}

export async function appendToLog(ctx: IRouterContext) {
  const logId = ctx.params.id;
}
