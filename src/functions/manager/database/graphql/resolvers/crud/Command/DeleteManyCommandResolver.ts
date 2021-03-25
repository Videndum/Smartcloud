import * as TypeGraphQL from "type-graphql";
import { DeleteManyCommandArgs } from "./args/DeleteManyCommandArgs";
import { Command } from "../../../models/Command";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Command)
export class DeleteManyCommandResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCommandArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.command.deleteMany(args);
  }
}
