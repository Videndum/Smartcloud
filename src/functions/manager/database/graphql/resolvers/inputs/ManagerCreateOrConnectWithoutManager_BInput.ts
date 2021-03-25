import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateWithoutManager_BInput } from "../inputs/ManagerCreateWithoutManager_BInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerCreateOrConnectWithoutManager_BInput {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManagerCreateWithoutManager_BInput, {
    nullable: false
  })
  create!: ManagerCreateWithoutManager_BInput;
}
