import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { BotWhereUniqueInput } from "../../../inputs/BotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBotArgs {
  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: false
  })
  where!: BotWhereUniqueInput;
}
