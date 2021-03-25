import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutownerInput } from "../inputs/ManagerCreateOrConnectWithoutownerInput";
import { ManagerCreateWithoutOwnerInput } from "../inputs/ManagerCreateWithoutOwnerInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [ManagerCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: ManagerCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: ManagerWhereUniqueInput[] | undefined;
}
