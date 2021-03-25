import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AdminOnGuildsWhereUniqueInput } from "../../../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAdminOnGuildsArgs {
  @TypeGraphQL.Field(_type => AdminOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: AdminOnGuildsWhereUniqueInput;
}
