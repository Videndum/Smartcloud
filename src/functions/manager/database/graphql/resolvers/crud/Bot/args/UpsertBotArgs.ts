import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { BotCreateInput } from "../../../inputs/BotCreateInput";
import { BotUpdateInput } from "../../../inputs/BotUpdateInput";
import { BotWhereUniqueInput } from "../../../inputs/BotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBotArgs {
  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: false
  })
  where!: BotWhereUniqueInput;

  @TypeGraphQL.Field(_type => BotCreateInput, {
    nullable: false
  })
  create!: BotCreateInput;

  @TypeGraphQL.Field(_type => BotUpdateInput, {
    nullable: false
  })
  update!: BotUpdateInput;
}
