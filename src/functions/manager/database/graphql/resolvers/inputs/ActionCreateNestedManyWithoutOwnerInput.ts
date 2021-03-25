import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionCreateOrConnectWithoutownerInput } from "../inputs/ActionCreateOrConnectWithoutownerInput";
import { ActionCreateWithoutOwnerInput } from "../inputs/ActionCreateWithoutOwnerInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActionCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [ActionCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: ActionCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: ActionCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionWhereUniqueInput], {
    nullable: true
  })
  connect?: ActionWhereUniqueInput[] | undefined;
}
