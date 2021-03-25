import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DiscordUserUpdateManyMutationInput } from "../../../inputs/DiscordUserUpdateManyMutationInput";
import { DiscordUserWhereInput } from "../../../inputs/DiscordUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: DiscordUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  where?: DiscordUserWhereInput | undefined;
}
