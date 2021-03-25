import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AdminOnGuildsUpdateManyMutationInput } from "../../../inputs/AdminOnGuildsUpdateManyMutationInput";
import { AdminOnGuildsWhereInput } from "../../../inputs/AdminOnGuildsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAdminOnGuildsArgs {
  @TypeGraphQL.Field(_type => AdminOnGuildsUpdateManyMutationInput, {
    nullable: false
  })
  data!: AdminOnGuildsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AdminOnGuildsWhereInput, {
    nullable: true
  })
  where?: AdminOnGuildsWhereInput | undefined;
}
