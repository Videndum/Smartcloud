import * as TypeGraphQL from "type-graphql";
import { FindFirstManagerArgs } from "./args/FindFirstManagerArgs";
import { Manager } from "../../../models/Manager";

@TypeGraphQL.Resolver(_of => Manager)
export class FindFirstManagerResolver {
  @TypeGraphQL.Query(_returns => Manager, {
    nullable: true
  })
  async findFirstManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstManagerArgs): Promise<Manager | null> {
    return ctx.prisma.manager.findFirst(args);
  }
}
