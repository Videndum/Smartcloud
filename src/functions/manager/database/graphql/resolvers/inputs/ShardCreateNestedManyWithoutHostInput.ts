import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardCreateOrConnectWithoutHostInput } from "../inputs/ShardCreateOrConnectWithoutHostInput";
import { ShardCreateWithoutHostInput } from "../inputs/ShardCreateWithoutHostInput";
import { ShardWhereUniqueInput } from "../inputs/ShardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardCreateNestedManyWithoutHostInput {
  @TypeGraphQL.Field(_type => [ShardCreateWithoutHostInput], {
    nullable: true
  })
  create?: ShardCreateWithoutHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardCreateOrConnectWithoutHostInput], {
    nullable: true
  })
  connectOrCreate?: ShardCreateOrConnectWithoutHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardWhereUniqueInput], {
    nullable: true
  })
  connect?: ShardWhereUniqueInput[] | undefined;
}
