import * as TypeGraphQL from "type-graphql";
import { Manager } from "../../../models/Manager";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { ManagerChildManagersArgs } from "./args/ManagerChildManagersArgs";
import { ManagerManager_AArgs } from "./args/ManagerManager_AArgs";
import { ManagerManager_BArgs } from "./args/ManagerManager_BArgs";
import { ManagerTransactionArgs } from "./args/ManagerTransactionArgs";

@TypeGraphQL.Resolver(_of => Manager)
export class ManagerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() manager: Manager, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.manager.findUnique({
      where: {
        id: manager.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Manager, {
    nullable: true
  })
  async parentManager(@TypeGraphQL.Root() manager: Manager, @TypeGraphQL.Ctx() ctx: any): Promise<Manager | null> {
    return ctx.prisma.manager.findUnique({
      where: {
        id: manager.id,
      },
    }).parentManager({});
  }

  @TypeGraphQL.FieldResolver(_type => [Manager], {
    nullable: false
  })
  async childManagers(@TypeGraphQL.Root() manager: Manager, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ManagerChildManagersArgs): Promise<Manager[]> {
    return ctx.prisma.manager.findUnique({
      where: {
        id: manager.id,
      },
    }).childManagers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Transaction], {
    nullable: false
  })
  async transaction(@TypeGraphQL.Root() manager: Manager, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ManagerTransactionArgs): Promise<Transaction[]> {
    return ctx.prisma.manager.findUnique({
      where: {
        id: manager.id,
      },
    }).transaction(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Manager], {
    nullable: false
  })
  async Manager_B(@TypeGraphQL.Root() manager: Manager, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ManagerManager_BArgs): Promise<Manager[]> {
    return ctx.prisma.manager.findUnique({
      where: {
        id: manager.id,
      },
    }).Manager_B(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Manager], {
    nullable: false
  })
  async Manager_A(@TypeGraphQL.Root() manager: Manager, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ManagerManager_AArgs): Promise<Manager[]> {
    return ctx.prisma.manager.findUnique({
      where: {
        id: manager.id,
      },
    }).Manager_A(args);
  }
}
