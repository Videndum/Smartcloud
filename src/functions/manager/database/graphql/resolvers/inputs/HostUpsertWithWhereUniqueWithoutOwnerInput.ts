import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateWithoutOwnerInput } from "../inputs/HostCreateWithoutOwnerInput";
import { HostUpdateWithoutOwnerInput } from "../inputs/HostUpdateWithoutOwnerInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: false
  })
  where!: HostWhereUniqueInput;

  @TypeGraphQL.Field(_type => HostUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: HostUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => HostCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: HostCreateWithoutOwnerInput;
}
