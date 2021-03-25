import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerUpdateWithoutParentManagerInput } from "../inputs/ManagerUpdateWithoutParentManagerInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateWithWhereUniqueWithoutParentManagerInput {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManagerUpdateWithoutParentManagerInput, {
    nullable: false
  })
  data!: ManagerUpdateWithoutParentManagerInput;
}
