import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TwitchUserMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accessToken!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshToken!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;
}
