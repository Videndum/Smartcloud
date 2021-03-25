import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateWithoutShardsInput } from "../inputs/HostCreateWithoutShardsInput";
import { HostUpdateWithoutShardsInput } from "../inputs/HostUpdateWithoutShardsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpsertWithoutShardsInput {
  @TypeGraphQL.Field(_type => HostUpdateWithoutShardsInput, {
    nullable: false
  })
  update!: HostUpdateWithoutShardsInput;

  @TypeGraphQL.Field(_type => HostCreateWithoutShardsInput, {
    nullable: false
  })
  create!: HostCreateWithoutShardsInput;
}
