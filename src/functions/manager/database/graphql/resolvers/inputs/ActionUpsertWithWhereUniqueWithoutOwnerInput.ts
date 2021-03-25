import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionCreateWithoutOwnerInput } from "../inputs/ActionCreateWithoutOwnerInput";
import { ActionUpdateWithoutOwnerInput } from "../inputs/ActionUpdateWithoutOwnerInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActionUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: ActionUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => ActionCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: ActionCreateWithoutOwnerInput;
}
