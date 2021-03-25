import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitterUserWhereInput } from "../../../inputs/TwitterUserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  where?: TwitterUserWhereInput | undefined;
}
