import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotUpdateWithoutPriorityHostInput } from "../inputs/BotUpdateWithoutPriorityHostInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpdateWithWhereUniqueWithoutPriorityHostInput {
  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: false
  })
  where!: BotWhereUniqueInput;

  @TypeGraphQL.Field(_type => BotUpdateWithoutPriorityHostInput, {
    nullable: false
  })
  data!: BotUpdateWithoutPriorityHostInput;
}
