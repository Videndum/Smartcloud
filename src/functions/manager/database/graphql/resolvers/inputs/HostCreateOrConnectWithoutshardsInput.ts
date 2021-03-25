import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateWithoutShardsInput } from "../inputs/HostCreateWithoutShardsInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostCreateOrConnectWithoutshardsInput {
  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: false
  })
  where!: HostWhereUniqueInput;

  @TypeGraphQL.Field(_type => HostCreateWithoutShardsInput, {
    nullable: false
  })
  create!: HostCreateWithoutShardsInput;
}
