import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionUpdateWithoutOwnerInput } from "../inputs/ActionUpdateWithoutOwnerInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActionUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: ActionUpdateWithoutOwnerInput;
}
