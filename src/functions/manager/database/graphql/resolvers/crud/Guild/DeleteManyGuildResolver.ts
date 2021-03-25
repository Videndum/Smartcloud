import * as TypeGraphQL from "type-graphql";
import { DeleteManyGuildArgs } from "./args/DeleteManyGuildArgs";
import { Guild } from "../../../models/Guild";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Guild)
export class DeleteManyGuildResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyGuildArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.guild.deleteMany(args);
  }
}
