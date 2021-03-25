import * as TypeGraphQL from "type-graphql";
import { FindManyManagerArgs } from "./args/FindManyManagerArgs";
import { Manager } from "../../../models/Manager";

@TypeGraphQL.Resolver(_of => Manager)
export class FindManyManagerResolver {
  @TypeGraphQL.Query(_returns => [Manager], {
    nullable: false
  })
  async managers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyManagerArgs): Promise<Manager[]> {
    return ctx.prisma.manager.findMany(args);
  }
}
