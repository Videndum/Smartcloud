import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UsersOnGuildsUpdateManyMutationInput } from "../../../inputs/UsersOnGuildsUpdateManyMutationInput";
import { UsersOnGuildsWhereInput } from "../../../inputs/UsersOnGuildsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUsersOnGuildsArgs {
  @TypeGraphQL.Field(_type => UsersOnGuildsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsersOnGuildsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UsersOnGuildsWhereInput, {
    nullable: true
  })
  where?: UsersOnGuildsWhereInput | undefined;
}
