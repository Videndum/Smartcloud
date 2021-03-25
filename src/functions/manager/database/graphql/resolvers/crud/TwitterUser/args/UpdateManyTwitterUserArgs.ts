import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitterUserUpdateManyMutationInput } from "../../../inputs/TwitterUserUpdateManyMutationInput";
import { TwitterUserWhereInput } from "../../../inputs/TwitterUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  where?: TwitterUserWhereInput | undefined;
}
