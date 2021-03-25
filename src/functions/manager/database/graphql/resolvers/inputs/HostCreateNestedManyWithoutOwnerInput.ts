import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateOrConnectWithoutownerInput } from "../inputs/HostCreateOrConnectWithoutownerInput";
import { HostCreateWithoutOwnerInput } from "../inputs/HostCreateWithoutOwnerInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [HostCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: HostCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: HostCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostWhereUniqueInput], {
    nullable: true
  })
  connect?: HostWhereUniqueInput[] | undefined;
}
