import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { BotOrderByInput } from "../../../inputs/BotOrderByInput";
import { BotWhereInput } from "../../../inputs/BotWhereInput";
import { BotWhereUniqueInput } from "../../../inputs/BotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBotArgs {
  @TypeGraphQL.Field(_type => BotWhereInput, {
    nullable: true
  })
  where?: BotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BotOrderByInput], {
    nullable: true
  })
  orderBy?: BotOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: true
  })
  cursor?: BotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
