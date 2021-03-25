import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateNestedManyWithoutTwitchAuthInput } from "../inputs/BotCreateNestedManyWithoutTwitchAuthInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchAuthCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  clientID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  twitchSecret!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sessionSecret!: string;

  @TypeGraphQL.Field(_type => BotCreateNestedManyWithoutTwitchAuthInput, {
    nullable: true
  })
  Bot?: BotCreateNestedManyWithoutTwitchAuthInput | undefined;
}
