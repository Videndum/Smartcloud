import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AdminOnGuildsCreateInput } from "../../../inputs/AdminOnGuildsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAdminOnGuildsArgs {
  @TypeGraphQL.Field(_type => AdminOnGuildsCreateInput, {
    nullable: false
  })
  data!: AdminOnGuildsCreateInput;
}
