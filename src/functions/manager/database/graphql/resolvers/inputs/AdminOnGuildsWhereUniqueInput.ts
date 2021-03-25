import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsUserIdGuildIdCompoundUniqueInput } from "../inputs/AdminOnGuildsUserIdGuildIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsWhereUniqueInput {
  @TypeGraphQL.Field(_type => AdminOnGuildsUserIdGuildIdCompoundUniqueInput, {
    nullable: true
  })
  userId_guildId?: AdminOnGuildsUserIdGuildIdCompoundUniqueInput | undefined;
}
