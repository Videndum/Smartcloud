import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UsersOnGuildsCreateInput } from "../../../inputs/UsersOnGuildsCreateInput";
import { UsersOnGuildsUpdateInput } from "../../../inputs/UsersOnGuildsUpdateInput";
import { UsersOnGuildsWhereUniqueInput } from "../../../inputs/UsersOnGuildsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUsersOnGuildsArgs {
  @TypeGraphQL.Field(_type => UsersOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnGuildsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnGuildsCreateInput, {
    nullable: false
  })
  create!: UsersOnGuildsCreateInput;

  @TypeGraphQL.Field(_type => UsersOnGuildsUpdateInput, {
    nullable: false
  })
  update!: UsersOnGuildsUpdateInput;
}
