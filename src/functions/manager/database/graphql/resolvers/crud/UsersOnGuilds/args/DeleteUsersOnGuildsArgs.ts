import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UsersOnGuildsWhereUniqueInput } from "../../../inputs/UsersOnGuildsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUsersOnGuildsArgs {
  @TypeGraphQL.Field(_type => UsersOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnGuildsWhereUniqueInput;
}
