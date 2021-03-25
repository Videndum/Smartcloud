import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostScalarWhereInput } from "../inputs/HostScalarWhereInput";
import { HostUpdateManyMutationInput } from "../inputs/HostUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => HostScalarWhereInput, {
    nullable: false
  })
  where!: HostScalarWhereInput;

  @TypeGraphQL.Field(_type => HostUpdateManyMutationInput, {
    nullable: false
  })
  data!: HostUpdateManyMutationInput;
}
