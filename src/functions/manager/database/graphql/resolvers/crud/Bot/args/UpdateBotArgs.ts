import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { BotUpdateInput } from "../../../inputs/BotUpdateInput";
import { BotWhereUniqueInput } from "../../../inputs/BotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBotArgs {
  @TypeGraphQL.Field(_type => BotUpdateInput, {
    nullable: false
  })
  data!: BotUpdateInput;

  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: false
  })
  where!: BotWhereUniqueInput;
}
