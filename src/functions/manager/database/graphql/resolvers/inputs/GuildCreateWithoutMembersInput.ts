import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsCreateNestedManyWithoutGuildInput } from "../inputs/AdminOnGuildsCreateNestedManyWithoutGuildInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildCreateWithoutMembersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => AdminOnGuildsCreateNestedManyWithoutGuildInput, {
    nullable: true
  })
  admins?: AdminOnGuildsCreateNestedManyWithoutGuildInput | undefined;
}
