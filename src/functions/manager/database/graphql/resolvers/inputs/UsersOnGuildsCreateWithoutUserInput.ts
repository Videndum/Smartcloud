import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildCreateNestedOneWithoutMembersInput } from "../inputs/GuildCreateNestedOneWithoutMembersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutMembersInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutMembersInput;
}
