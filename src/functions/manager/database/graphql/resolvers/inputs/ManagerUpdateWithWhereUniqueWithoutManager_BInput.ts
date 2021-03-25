import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerUpdateWithoutManager_BInput } from "../inputs/ManagerUpdateWithoutManager_BInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateWithWhereUniqueWithoutManager_BInput {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManagerUpdateWithoutManager_BInput, {
    nullable: false
  })
  data!: ManagerUpdateWithoutManager_BInput;
}
