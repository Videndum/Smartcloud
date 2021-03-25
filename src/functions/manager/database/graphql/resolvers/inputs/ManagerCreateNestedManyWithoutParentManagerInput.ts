import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithoutparentManagerInput } from "../inputs/ManagerCreateOrConnectWithoutparentManagerInput";
import { ManagerCreateWithoutParentManagerInput } from "../inputs/ManagerCreateWithoutParentManagerInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerCreateNestedManyWithoutParentManagerInput {
  @TypeGraphQL.Field(_type => [ManagerCreateWithoutParentManagerInput], {
    nullable: true
  })
  create?: ManagerCreateWithoutParentManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerCreateOrConnectWithoutparentManagerInput], {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithoutparentManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereUniqueInput], {
    nullable: true
  })
  connect?: ManagerWhereUniqueInput[] | undefined;
}
