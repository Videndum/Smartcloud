import * as TypeGraphQL from "type-graphql";
import { UpdateManyTwitterUserArgs } from "./args/UpdateManyTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class UpdateManyTwitterUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTwitterUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitterUser.updateMany(args);
  }
}
