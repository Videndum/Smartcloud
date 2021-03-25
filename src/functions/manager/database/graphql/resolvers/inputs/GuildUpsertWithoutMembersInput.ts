import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildCreateWithoutMembersInput } from "../inputs/GuildCreateWithoutMembersInput";
import { GuildUpdateWithoutMembersInput } from "../inputs/GuildUpdateWithoutMembersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildUpsertWithoutMembersInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutMembersInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutMembersInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutMembersInput, {
    nullable: false
  })
  create!: GuildCreateWithoutMembersInput;
}
