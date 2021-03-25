import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateWithoutParentManagerInput } from "../inputs/ManagerCreateWithoutParentManagerInput";
import { ManagerUpdateWithoutParentManagerInput } from "../inputs/ManagerUpdateWithoutParentManagerInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpsertWithWhereUniqueWithoutParentManagerInput {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManagerUpdateWithoutParentManagerInput, {
    nullable: false
  })
  update!: ManagerUpdateWithoutParentManagerInput;

  @TypeGraphQL.Field(_type => ManagerCreateWithoutParentManagerInput, {
    nullable: false
  })
  create!: ManagerCreateWithoutParentManagerInput;
}
