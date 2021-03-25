import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommandCreateWithoutOwnerInput } from "../inputs/CommandCreateWithoutOwnerInput";
import { CommandWhereUniqueInput } from "../inputs/CommandWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommandCreateOrConnectWithoutownerInput {
  @TypeGraphQL.Field(_type => CommandWhereUniqueInput, {
    nullable: false
  })
  where!: CommandWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommandCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: CommandCreateWithoutOwnerInput;
}
