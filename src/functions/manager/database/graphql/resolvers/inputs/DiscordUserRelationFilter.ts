import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserWhereInput } from "../inputs/DiscordUserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserRelationFilter {
  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  is?: DiscordUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  isNot?: DiscordUserWhereInput | undefined;
}
