import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithouthostsInput } from "../inputs/BotCreateOrConnectWithouthostsInput";
import { BotCreateWithoutHostsInput } from "../inputs/BotCreateWithoutHostsInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotCreateNestedManyWithoutHostsInput {
  @TypeGraphQL.Field(_type => [BotCreateWithoutHostsInput], {
    nullable: true
  })
  create?: BotCreateWithoutHostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotCreateOrConnectWithouthostsInput], {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithouthostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereUniqueInput], {
    nullable: true
  })
  connect?: BotWhereUniqueInput[] | undefined;
}
