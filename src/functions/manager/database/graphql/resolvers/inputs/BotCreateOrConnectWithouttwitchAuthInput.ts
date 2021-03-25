import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateWithoutTwitchAuthInput } from "../inputs/BotCreateWithoutTwitchAuthInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotCreateOrConnectWithouttwitchAuthInput {
  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: false
  })
  where!: BotWhereUniqueInput;

  @TypeGraphQL.Field(_type => BotCreateWithoutTwitchAuthInput, {
    nullable: false
  })
  create!: BotCreateWithoutTwitchAuthInput;
}
