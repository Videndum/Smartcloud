import * as TypeGraphQL from "type-graphql";
import { UpdateManyTwitchAuthArgs } from "./args/UpdateManyTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class UpdateManyTwitchAuthResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTwitchAuthArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitchAuth.updateMany(args);
  }
}
