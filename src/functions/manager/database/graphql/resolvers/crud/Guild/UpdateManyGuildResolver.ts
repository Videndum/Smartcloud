import * as TypeGraphQL from "type-graphql";
import { UpdateManyGuildArgs } from "./args/UpdateManyGuildArgs";
import { Guild } from "../../../models/Guild";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Guild)
export class UpdateManyGuildResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyGuildArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.guild.updateMany(args);
  }
}
