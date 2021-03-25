import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { BotWhereInput } from "../../../inputs/BotWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBotArgs {
  @TypeGraphQL.Field(_type => BotWhereInput, {
    nullable: true
  })
  where?: BotWhereInput | undefined;
}
