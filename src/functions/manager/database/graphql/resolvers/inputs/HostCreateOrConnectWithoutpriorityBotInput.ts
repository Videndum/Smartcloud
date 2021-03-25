import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateWithoutPriorityBotInput } from "../inputs/HostCreateWithoutPriorityBotInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostCreateOrConnectWithoutpriorityBotInput {
  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: false
  })
  where!: HostWhereUniqueInput;

  @TypeGraphQL.Field(_type => HostCreateWithoutPriorityBotInput, {
    nullable: false
  })
  create!: HostCreateWithoutPriorityBotInput;
}
