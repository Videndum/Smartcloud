import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerUpdateWithoutOwnerInput } from "../inputs/ManagerUpdateWithoutOwnerInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManagerUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: ManagerUpdateWithoutOwnerInput;
}
