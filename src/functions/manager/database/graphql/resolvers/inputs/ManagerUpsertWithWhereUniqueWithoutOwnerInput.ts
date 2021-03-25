import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateWithoutOwnerInput } from "../inputs/ManagerCreateWithoutOwnerInput";
import { ManagerUpdateWithoutOwnerInput } from "../inputs/ManagerUpdateWithoutOwnerInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManagerUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: ManagerUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => ManagerCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: ManagerCreateWithoutOwnerInput;
}
