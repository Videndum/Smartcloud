import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutchildManagersInput } from "../inputs/ManagerCreateOrConnectWithoutchildManagersInput";
import { ManagerCreateWithoutChildManagersInput } from "../inputs/ManagerCreateWithoutChildManagersInput";
import { ManagerUpdateWithoutChildManagersInput } from "../inputs/ManagerUpdateWithoutChildManagersInput";
import { ManagerUpsertWithoutChildManagersInput } from "../inputs/ManagerUpsertWithoutChildManagersInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateOneWithoutChildManagersInput {
  @TypeGraphQL.Field(_type => ManagerCreateWithoutChildManagersInput, {
    nullable: true
  })
  create?: ManagerCreateWithoutChildManagersInput | undefined;

  @TypeGraphQL.Field(_type => ManagerCreateOrConnectWithoutchildManagersInput, {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutchildManagersInput | undefined;

  @TypeGraphQL.Field(_type => ManagerUpsertWithoutChildManagersInput, {
    nullable: true
  })
  upsert?: ManagerUpsertWithoutChildManagersInput | undefined;

  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: true
  })
  connect?: ManagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ManagerUpdateWithoutChildManagersInput, {
    nullable: true
  })
  update?: ManagerUpdateWithoutChildManagersInput | undefined;
}
