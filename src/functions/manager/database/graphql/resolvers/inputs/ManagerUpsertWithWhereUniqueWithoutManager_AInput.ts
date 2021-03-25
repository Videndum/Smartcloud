import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateWithoutManager_AInput } from "../inputs/ManagerCreateWithoutManager_AInput";
import { ManagerUpdateWithoutManager_AInput } from "../inputs/ManagerUpdateWithoutManager_AInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpsertWithWhereUniqueWithoutManager_AInput {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManagerUpdateWithoutManager_AInput, {
    nullable: false
  })
  update!: ManagerUpdateWithoutManager_AInput;

  @TypeGraphQL.Field(_type => ManagerCreateWithoutManager_AInput, {
    nullable: false
  })
  create!: ManagerCreateWithoutManager_AInput;
}
