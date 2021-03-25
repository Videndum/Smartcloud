import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateNestedOneWithoutDiscordInput } from "../inputs/UserCreateNestedOneWithoutDiscordInput";
import { UsersOnGuildsCreateNestedManyWithoutUserInput } from "../inputs/UsersOnGuildsCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserCreateWithoutAdministatesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discrim!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDiscordInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutDiscordInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  UsersOnGuilds?: UsersOnGuildsCreateNestedManyWithoutUserInput | undefined;
}
