import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { BotCreateInput } from "../../../inputs/BotCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBotArgs {
  @TypeGraphQL.Field(_type => BotCreateInput, {
    nullable: false
  })
  data!: BotCreateInput;
}
