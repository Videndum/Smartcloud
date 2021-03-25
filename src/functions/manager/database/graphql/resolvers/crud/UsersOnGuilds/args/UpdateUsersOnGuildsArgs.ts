import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UsersOnGuildsUpdateInput } from "../../../inputs/UsersOnGuildsUpdateInput";
import { UsersOnGuildsWhereUniqueInput } from "../../../inputs/UsersOnGuildsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUsersOnGuildsArgs {
  @TypeGraphQL.Field(_type => UsersOnGuildsUpdateInput, {
    nullable: false
  })
  data!: UsersOnGuildsUpdateInput;

  @TypeGraphQL.Field(_type => UsersOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnGuildsWhereUniqueInput;
}
