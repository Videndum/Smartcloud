import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommandWhereInput } from "../inputs/CommandWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommandListRelationFilter {
  @TypeGraphQL.Field(_type => CommandWhereInput, {
    nullable: true
  })
  every?: CommandWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommandWhereInput, {
    nullable: true
  })
  some?: CommandWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommandWhereInput, {
    nullable: true
  })
  none?: CommandWhereInput | undefined;
}
