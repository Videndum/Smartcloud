import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitterUserWhereInput } from "../inputs/TwitterUserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitterUserListRelationFilter {
  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  every?: TwitterUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  some?: TwitterUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserWhereInput, {
    nullable: true
  })
  none?: TwitterUserWhereInput | undefined;
}
