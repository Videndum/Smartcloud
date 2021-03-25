import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UsersOnGuildsCreateInput } from "../../../inputs/UsersOnGuildsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUsersOnGuildsArgs {
  @TypeGraphQL.Field(_type => UsersOnGuildsCreateInput, {
    nullable: false
  })
  data!: UsersOnGuildsCreateInput;
}
