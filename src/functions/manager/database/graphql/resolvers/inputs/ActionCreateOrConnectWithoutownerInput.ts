import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionCreateWithoutOwnerInput } from "../inputs/ActionCreateWithoutOwnerInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActionCreateOrConnectWithoutownerInput {
  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: ActionCreateWithoutOwnerInput;
}
