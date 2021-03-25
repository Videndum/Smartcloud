import * as TypeGraphQL from "type-graphql";
import { DeleteManyTwitterUserArgs } from "./args/DeleteManyTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class DeleteManyTwitterUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTwitterUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitterUser.deleteMany(args);
  }
}
