import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotListRelationFilter } from "../inputs/BotListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchAuthWhereInput {
  @TypeGraphQL.Field(_type => [TwitchAuthWhereInput], {
    nullable: true
  })
  AND?: TwitchAuthWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitchAuthWhereInput], {
    nullable: true
  })
  OR?: TwitchAuthWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitchAuthWhereInput], {
    nullable: true
  })
  NOT?: TwitchAuthWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  clientID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  twitchSecret?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sessionSecret?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BotListRelationFilter, {
    nullable: true
  })
  Bot?: BotListRelationFilter | undefined;
}
