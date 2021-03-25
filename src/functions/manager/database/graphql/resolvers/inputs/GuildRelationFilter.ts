import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildWhereInput } from "../inputs/GuildWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildRelationFilter {
  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  is?: GuildWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  isNot?: GuildWhereInput | undefined;
}
