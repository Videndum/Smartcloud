import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateWithoutShardsInput } from "../inputs/BotCreateWithoutShardsInput";
import { BotUpdateWithoutShardsInput } from "../inputs/BotUpdateWithoutShardsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpsertWithoutShardsInput {
  @TypeGraphQL.Field(_type => BotUpdateWithoutShardsInput, {
    nullable: false
  })
  update!: BotUpdateWithoutShardsInput;

  @TypeGraphQL.Field(_type => BotCreateWithoutShardsInput, {
    nullable: false
  })
  create!: BotCreateWithoutShardsInput;
}
