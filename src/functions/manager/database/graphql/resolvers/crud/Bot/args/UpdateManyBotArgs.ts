import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { BotUpdateManyMutationInput } from "../../../inputs/BotUpdateManyMutationInput";
import { BotWhereInput } from "../../../inputs/BotWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBotArgs {
  @TypeGraphQL.Field(_type => BotUpdateManyMutationInput, {
    nullable: false
  })
  data!: BotUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BotWhereInput, {
    nullable: true
  })
  where?: BotWhereInput | undefined;
}
