import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AdminOnGuildsUpdateInput } from "../../../inputs/AdminOnGuildsUpdateInput";
import { AdminOnGuildsWhereUniqueInput } from "../../../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAdminOnGuildsArgs {
  @TypeGraphQL.Field(_type => AdminOnGuildsUpdateInput, {
    nullable: false
  })
  data!: AdminOnGuildsUpdateInput;

  @TypeGraphQL.Field(_type => AdminOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: AdminOnGuildsWhereUniqueInput;
}
