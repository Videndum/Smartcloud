import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Action } from "../models/Action";
import { Bot } from "../models/Bot";
import { Command } from "../models/Command";
import { DiscordUser } from "../models/DiscordUser";
import { Host } from "../models/Host";
import { Manager } from "../models/Manager";
import { PAT } from "../models/PAT";
import { TwitchUser } from "../models/TwitchUser";
import { TwitterUser } from "../models/TwitterUser";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAdmin!: boolean;

  actions?: Action[];

  Bot?: Bot[];

  commands?: Command[];

  discord?: DiscordUser | null;

  Hosts?: Host[];

  Manager?: Manager[];

  pat?: PAT[];

  twitch?: TwitchUser | null;

  TwitterUser?: TwitterUser[];
}
