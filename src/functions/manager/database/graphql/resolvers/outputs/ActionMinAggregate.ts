import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordExecutionType } from "../../enums/DiscordExecutionType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ActionMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ownerId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  registeredAt!: Date | null;

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
    nullable: true
  })
  type!: "JSON" | "JS" | "PY" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;
}
