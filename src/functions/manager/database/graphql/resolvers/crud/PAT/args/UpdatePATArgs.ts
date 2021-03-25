import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PATUpdateInput } from "../../../inputs/PATUpdateInput";
import { PATWhereUniqueInput } from "../../../inputs/PATWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePATArgs {
  @TypeGraphQL.Field(_type => PATUpdateInput, {
    nullable: false
  })
  data!: PATUpdateInput;

  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: false
  })
  where!: PATWhereUniqueInput;
}
