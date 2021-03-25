import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutchildManagersInput } from "../inputs/ManagerCreateOrConnectWithoutchildManagersInput";
import { ManagerCreateWithoutChildManagersInput } from "../inputs/ManagerCreateWithoutChildManagersInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerCreateNestedOneWithoutChildManagersInput {
  @TypeGraphQL.Field(_type => ManagerCreateWithoutChildManagersInput, {
    nullable: true
  })
  create?: ManagerCreateWithoutChildManagersInput | undefined;

  @TypeGraphQL.Field(_type => ManagerCreateOrConnectWithoutchildManagersInput, {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutchildManagersInput | undefined;

  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: true
  })
  connect?: ManagerWhereUniqueInput | undefined;
}
