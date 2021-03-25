import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildCreateWithoutAdminsInput } from "../inputs/GuildCreateWithoutAdminsInput";
import { GuildUpdateWithoutAdminsInput } from "../inputs/GuildUpdateWithoutAdminsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildUpsertWithoutAdminsInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutAdminsInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutAdminsInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutAdminsInput, {
    nullable: false
  })
  create!: GuildCreateWithoutAdminsInput;
}
