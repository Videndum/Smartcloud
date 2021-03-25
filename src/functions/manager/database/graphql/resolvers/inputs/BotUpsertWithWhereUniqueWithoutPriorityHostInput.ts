import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateWithoutPriorityHostInput } from "../inputs/BotCreateWithoutPriorityHostInput";
import { BotUpdateWithoutPriorityHostInput } from "../inputs/BotUpdateWithoutPriorityHostInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpsertWithWhereUniqueWithoutPriorityHostInput {
  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: false
  })
  where!: BotWhereUniqueInput;

  @TypeGraphQL.Field(_type => BotUpdateWithoutPriorityHostInput, {
    nullable: false
  })
  update!: BotUpdateWithoutPriorityHostInput;

  @TypeGraphQL.Field(_type => BotCreateWithoutPriorityHostInput, {
    nullable: false
  })
  create!: BotCreateWithoutPriorityHostInput;
}
