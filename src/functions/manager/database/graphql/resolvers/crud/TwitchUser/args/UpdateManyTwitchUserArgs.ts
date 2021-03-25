import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchUserUpdateManyMutationInput } from "../../../inputs/TwitchUserUpdateManyMutationInput";
import { TwitchUserWhereInput } from "../../../inputs/TwitchUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTwitchUserArgs {
  @TypeGraphQL.Field(_type => TwitchUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitchUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TwitchUserWhereInput, {
    nullable: true
  })
  where?: TwitchUserWhereInput | undefined;
}
