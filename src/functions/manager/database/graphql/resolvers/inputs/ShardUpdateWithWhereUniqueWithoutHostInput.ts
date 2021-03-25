import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardUpdateWithoutHostInput } from "../inputs/ShardUpdateWithoutHostInput";
import { ShardWhereUniqueInput } from "../inputs/ShardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardUpdateWithWhereUniqueWithoutHostInput {
  @TypeGraphQL.Field(_type => ShardWhereUniqueInput, {
    nullable: false
  })
  where!: ShardWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShardUpdateWithoutHostInput, {
    nullable: false
  })
  data!: ShardUpdateWithoutHostInput;
}
