import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitterUserCreateInput } from "../../../inputs/TwitterUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserCreateInput, {
    nullable: false
  })
  data!: TwitterUserCreateInput;
}
