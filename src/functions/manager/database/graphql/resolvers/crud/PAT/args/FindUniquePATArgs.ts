import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PATWhereUniqueInput } from "../../../inputs/PATWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePATArgs {
  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: false
  })
  where!: PATWhereUniqueInput;
}
