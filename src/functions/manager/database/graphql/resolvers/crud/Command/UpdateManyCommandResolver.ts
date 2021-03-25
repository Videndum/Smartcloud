import * as TypeGraphQL from "type-graphql";
import { UpdateManyCommandArgs } from "./args/UpdateManyCommandArgs";
import { Command } from "../../../models/Command";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Command)
export class UpdateManyCommandResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCommandArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.command.updateMany(args);
  }
}
