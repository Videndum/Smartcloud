import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UsersOnGuildsWhereInput } from "../../../inputs/UsersOnGuildsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUsersOnGuildsArgs {
  @TypeGraphQL.Field(_type => UsersOnGuildsWhereInput, {
    nullable: true
  })
  where?: UsersOnGuildsWhereInput | undefined;
}
