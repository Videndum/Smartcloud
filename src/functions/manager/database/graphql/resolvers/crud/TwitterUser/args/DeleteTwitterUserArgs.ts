import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitterUserWhereUniqueInput } from "../../../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterUserWhereUniqueInput;
}
