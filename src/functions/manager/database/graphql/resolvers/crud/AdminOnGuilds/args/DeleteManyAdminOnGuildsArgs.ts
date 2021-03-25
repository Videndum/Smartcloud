import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AdminOnGuildsWhereInput } from "../../../inputs/AdminOnGuildsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAdminOnGuildsArgs {
  @TypeGraphQL.Field(_type => AdminOnGuildsWhereInput, {
    nullable: true
  })
  where?: AdminOnGuildsWhereInput | undefined;
}
