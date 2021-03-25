import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildCreateWithoutMembersInput } from "../inputs/GuildCreateWithoutMembersInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildCreateOrConnectWithoutmembersInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutMembersInput, {
    nullable: false
  })
  create!: GuildCreateWithoutMembersInput;
}
