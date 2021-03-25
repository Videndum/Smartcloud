import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsUserIdGuildIdCompoundUniqueInput } from "../inputs/UsersOnGuildsUserIdGuildIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsWhereUniqueInput {
  @TypeGraphQL.Field(_type => UsersOnGuildsUserIdGuildIdCompoundUniqueInput, {
    nullable: true
  })
  userId_guildId?: UsersOnGuildsUserIdGuildIdCompoundUniqueInput | undefined;
}
