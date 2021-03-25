import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateOrConnectWithoutshardsInput } from "../inputs/HostCreateOrConnectWithoutshardsInput";
import { HostCreateWithoutShardsInput } from "../inputs/HostCreateWithoutShardsInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostCreateNestedOneWithoutShardsInput {
  @TypeGraphQL.Field(_type => HostCreateWithoutShardsInput, {
    nullable: true
  })
  create?: HostCreateWithoutShardsInput | undefined;

  @TypeGraphQL.Field(_type => HostCreateOrConnectWithoutshardsInput, {
    nullable: true
  })
  connectOrCreate?: HostCreateOrConnectWithoutshardsInput | undefined;

  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: true
  })
  connect?: HostWhereUniqueInput | undefined;
}
