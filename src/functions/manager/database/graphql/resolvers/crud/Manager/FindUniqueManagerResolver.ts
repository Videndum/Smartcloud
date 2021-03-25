import * as TypeGraphQL from "type-graphql";
import { FindUniqueManagerArgs } from "./args/FindUniqueManagerArgs";
import { Manager } from "../../../models/Manager";

@TypeGraphQL.Resolver(_of => Manager)
export class FindUniqueManagerResolver {
  @TypeGraphQL.Query(_returns => Manager, {
    nullable: true
  })
  async manager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueManagerArgs): Promise<Manager | null> {
    return ctx.prisma.manager.findUnique(args);
  }
}
