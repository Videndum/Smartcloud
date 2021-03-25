import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsCreateNestedManyWithoutUserInput } from "../inputs/AdminOnGuildsCreateNestedManyWithoutUserInput";
import { UsersOnGuildsCreateNestedManyWithoutUserInput } from "../inputs/UsersOnGuildsCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserCreateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => AdminOnGuildsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  administates?: AdminOnGuildsCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  UsersOnGuilds?: UsersOnGuildsCreateNestedManyWithoutUserInput | undefined;
}
