import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Action)
export class ActionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() action: Action, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.action.findUnique({
      where: {
        id: action.id,
      },
    }).owner({});
  }
}
