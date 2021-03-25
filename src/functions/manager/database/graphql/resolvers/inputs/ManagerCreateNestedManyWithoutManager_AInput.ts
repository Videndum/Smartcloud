import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutManager_AInput } from "../inputs/ManagerCreateOrConnectWithoutManager_AInput";
import { ManagerCreateWithoutManager_AInput } from "../inputs/ManagerCreateWithoutManager_AInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerCreateNestedManyWithoutManager_AInput {
  @TypeGraphQL.Field(_type => [ManagerCreateWithoutManager_AInput], {
    nullable: true
  })
  create?: ManagerCreateWithoutManager_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerCreateOrConnectWithoutManager_AInput], {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutManager_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: ManagerWhereUniqueInput[] | undefined;
}
