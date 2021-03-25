import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsListRelationFilter } from "../inputs/AdminOnGuildsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsersOnGuildsListRelationFilter } from "../inputs/UsersOnGuildsListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildWhereInput {
  @TypeGraphQL.Field(_type => [GuildWhereInput], {
    nullable: true
  })
  AND?: GuildWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereInput], {
    nullable: true
  })
  OR?: GuildWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereInput], {
    nullable: true
  })
  NOT?: GuildWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AdminOnGuildsListRelationFilter, {
    nullable: true
  })
  admins?: AdminOnGuildsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsListRelationFilter, {
    nullable: true
  })
  members?: UsersOnGuildsListRelationFilter | undefined;
}
