import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommandUpdateWithoutOwnerInput } from "../inputs/CommandUpdateWithoutOwnerInput";
import { CommandWhereUniqueInput } from "../inputs/CommandWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommandUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CommandWhereUniqueInput, {
    nullable: false
  })
  where!: CommandWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommandUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: CommandUpdateWithoutOwnerInput;
}
