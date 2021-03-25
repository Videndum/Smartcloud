import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateWithoutHostsInput } from "../inputs/BotCreateWithoutHostsInput";
import { BotUpdateWithoutHostsInput } from "../inputs/BotUpdateWithoutHostsInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpsertWithWhereUniqueWithoutHostsInput {
  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: false
  })
  where!: BotWhereUniqueInput;

  @TypeGraphQL.Field(_type => BotUpdateWithoutHostsInput, {
    nullable: false
  })
  update!: BotUpdateWithoutHostsInput;

  @TypeGraphQL.Field(_type => BotCreateWithoutHostsInput, {
    nullable: false
  })
  create!: BotCreateWithoutHostsInput;
}
