import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TwitchUser {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accessToken!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  refreshToken!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | null;

  user?: User | null;
}
