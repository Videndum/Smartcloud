import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithoutpriorityHostInput } from "../inputs/BotCreateOrConnectWithoutpriorityHostInput";
import { BotCreateWithoutPriorityHostInput } from "../inputs/BotCreateWithoutPriorityHostInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotCreateNestedManyWithoutPriorityHostInput {
  @TypeGraphQL.Field(_type => [BotCreateWithoutPriorityHostInput], {
    nullable: true
  })
  create?: BotCreateWithoutPriorityHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotCreateOrConnectWithoutpriorityHostInput], {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithoutpriorityHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereUniqueInput], {
    nullable: true
  })
  connect?: BotWhereUniqueInput[] | undefined;
}
