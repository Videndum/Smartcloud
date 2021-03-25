import * as TypeGraphQL from "type-graphql";
import { CreateManagerArgs } from "./args/CreateManagerArgs";
import { Manager } from "../../../models/Manager";

@TypeGraphQL.Resolver(_of => Manager)
export class CreateManagerResolver {
  @TypeGraphQL.Mutation(_returns => Manager, {
    nullable: false
  })
  async createManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManagerArgs): Promise<Manager> {
    return ctx.prisma.manager.create(args);
  }
}
