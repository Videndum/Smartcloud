import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateWithoutOwnerInput } from "../inputs/HostCreateWithoutOwnerInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostCreateOrConnectWithoutownerInput {
  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: false
  })
  where!: HostWhereUniqueInput;

  @TypeGraphQL.Field(_type => HostCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: HostCreateWithoutOwnerInput;
}
