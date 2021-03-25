import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUser } from "../models/DiscordUser";
import { Guild } from "../models/Guild";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AdminOnGuilds {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guildId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  guild?: Guild;

  user?: DiscordUser;
}
