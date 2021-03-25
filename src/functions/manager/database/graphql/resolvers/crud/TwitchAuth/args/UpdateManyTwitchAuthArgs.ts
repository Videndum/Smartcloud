import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchAuthUpdateManyMutationInput } from "../../../inputs/TwitchAuthUpdateManyMutationInput";
import { TwitchAuthWhereInput } from "../../../inputs/TwitchAuthWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTwitchAuthArgs {
  @TypeGraphQL.Field(_type => TwitchAuthUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitchAuthUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TwitchAuthWhereInput, {
    nullable: true
  })
  where?: TwitchAuthWhereInput | undefined;
}
