import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutManager_BInput } from "../inputs/ManagerCreateOrConnectWithoutManager_BInput";
import { ManagerCreateWithoutManager_BInput } from "../inputs/ManagerCreateWithoutManager_BInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerCreateNestedManyWithoutManager_BInput {
  @TypeGraphQL.Field(_type => [ManagerCreateWithoutManager_BInput], {
    nullable: true
  })
  create?: ManagerCreateWithoutManager_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerCreateOrConnectWithoutManager_BInput], {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutManager_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: ManagerWhereUniqueInput[] | undefined;
}
