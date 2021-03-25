import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateWithoutPriorityBotInput } from "../inputs/HostCreateWithoutPriorityBotInput";
import { HostUpdateWithoutPriorityBotInput } from "../inputs/HostUpdateWithoutPriorityBotInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpsertWithoutPriorityBotInput {
  @TypeGraphQL.Field(_type => HostUpdateWithoutPriorityBotInput, {
    nullable: false
  })
  update!: HostUpdateWithoutPriorityBotInput;

  @TypeGraphQL.Field(_type => HostCreateWithoutPriorityBotInput, {
    nullable: false
  })
  create!: HostCreateWithoutPriorityBotInput;
}
