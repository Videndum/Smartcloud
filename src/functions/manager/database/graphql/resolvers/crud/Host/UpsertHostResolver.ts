import * as TypeGraphQL from "type-graphql";
import { UpsertHostArgs } from "./args/UpsertHostArgs";
import { Host } from "../../../models/Host";

@TypeGraphQL.Resolver(_of => Host)
export class UpsertHostResolver {
  @TypeGraphQL.Mutation(_returns => Host, {
    nullable: false
  })
  async upsertHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertHostArgs): Promise<Host> {
    return ctx.prisma.host.upsert(args);
  }
}
