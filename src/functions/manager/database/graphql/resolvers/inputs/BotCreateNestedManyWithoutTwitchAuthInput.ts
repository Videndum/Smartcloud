import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithouttwitchAuthInput } from "../inputs/BotCreateOrConnectWithouttwitchAuthInput";
import { BotCreateWithoutTwitchAuthInput } from "../inputs/BotCreateWithoutTwitchAuthInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotCreateNestedManyWithoutTwitchAuthInput {
  @TypeGraphQL.Field(_type => [BotCreateWithoutTwitchAuthInput], {
    nullable: true
  })
  create?: BotCreateWithoutTwitchAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotCreateOrConnectWithouttwitchAuthInput], {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithouttwitchAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereUniqueInput], {
    nullable: true
  })
  connect?: BotWhereUniqueInput[] | undefined;
}
