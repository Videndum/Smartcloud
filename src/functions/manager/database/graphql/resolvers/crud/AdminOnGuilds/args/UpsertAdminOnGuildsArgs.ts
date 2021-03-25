import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AdminOnGuildsCreateInput } from "../../../inputs/AdminOnGuildsCreateInput";
import { AdminOnGuildsUpdateInput } from "../../../inputs/AdminOnGuildsUpdateInput";
import { AdminOnGuildsWhereUniqueInput } from "../../../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAdminOnGuildsArgs {
  @TypeGraphQL.Field(_type => AdminOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: AdminOnGuildsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AdminOnGuildsCreateInput, {
    nullable: false
  })
  create!: AdminOnGuildsCreateInput;

  @TypeGraphQL.Field(_type => AdminOnGuildsUpdateInput, {
    nullable: false
  })
  update!: AdminOnGuildsUpdateInput;
}
