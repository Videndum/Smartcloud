import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuilds } from "../models/AdminOnGuilds";
import { User } from "../models/User";
import { UsersOnGuilds } from "../models/UsersOnGuilds";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DiscordUser {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discrim!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | null;

  user?: User | null;

  administates?: AdminOnGuilds[];

  UsersOnGuilds?: UsersOnGuilds[];
}
