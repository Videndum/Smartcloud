import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitterUserOrderByInput } from "../../../inputs/TwitterUserOrderByInput";
import { TwitterUserWhereInput } from "../../../inputs/TwitterUserWhereInput";
import { TwitterUserWhereUniqueInput } from "../../../inputs/TwitterUserWhereUniqueInput";
import { TwitterUserScalarFieldEnum } from "../../../../enums/TwitterUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  where?: TwitterUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserOrderByInput], {
    nullable: true
  })
  orderBy?: TwitterUserOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: TwitterUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "username" | "discrim" | "userId"> | undefined;
}
