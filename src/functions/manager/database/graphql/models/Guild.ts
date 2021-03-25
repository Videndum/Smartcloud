import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuilds } from "../models/AdminOnGuilds";
import { UsersOnGuilds } from "../models/UsersOnGuilds";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Guild {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  admins?: AdminOnGuilds[];

  members?: UsersOnGuilds[];
}
