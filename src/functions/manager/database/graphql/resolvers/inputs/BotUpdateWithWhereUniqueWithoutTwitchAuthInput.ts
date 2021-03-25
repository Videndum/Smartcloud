import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotUpdateWithoutTwitchAuthInput } from "../inputs/BotUpdateWithoutTwitchAuthInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpdateWithWhereUniqueWithoutTwitchAuthInput {
  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: false
  })
  where!: BotWhereUniqueInput;

  @TypeGraphQL.Field(_type => BotUpdateWithoutTwitchAuthInput, {
    nullable: false
  })
  data!: BotUpdateWithoutTwitchAuthInput;
}
