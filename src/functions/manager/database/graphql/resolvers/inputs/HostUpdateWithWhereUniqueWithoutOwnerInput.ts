import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostUpdateWithoutOwnerInput } from "../inputs/HostUpdateWithoutOwnerInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: false
  })
  where!: HostWhereUniqueInput;

  @TypeGraphQL.Field(_type => HostUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: HostUpdateWithoutOwnerInput;
}
