import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateWithoutBotsInput } from "../inputs/HostCreateWithoutBotsInput";
import { HostUpdateWithoutBotsInput } from "../inputs/HostUpdateWithoutBotsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpsertWithoutBotsInput {
  @TypeGraphQL.Field(_type => HostUpdateWithoutBotsInput, {
    nullable: false
  })
  update!: HostUpdateWithoutBotsInput;

  @TypeGraphQL.Field(_type => HostCreateWithoutBotsInput, {
    nullable: false
  })
  create!: HostCreateWithoutBotsInput;
}
