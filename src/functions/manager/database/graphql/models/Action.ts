import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { User } from "../models/User";
import { DiscordExecutionType } from "../enums/DiscordExecutionType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Action {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  registeredAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  usage!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cost!: number;

  @TypeGraphQL.Field(_type => DiscordExecutionType, {
    nullable: false
  })
  type!: "JSON" | "JS" | "PY";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  owner?: User;
}
