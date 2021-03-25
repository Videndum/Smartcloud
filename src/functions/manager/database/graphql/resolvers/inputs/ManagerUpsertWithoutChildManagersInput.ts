import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateWithoutChildManagersInput } from "../inputs/ManagerCreateWithoutChildManagersInput";
import { ManagerUpdateWithoutChildManagersInput } from "../inputs/ManagerUpdateWithoutChildManagersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpsertWithoutChildManagersInput {
  @TypeGraphQL.Field(_type => ManagerUpdateWithoutChildManagersInput, {
    nullable: false
  })
  update!: ManagerUpdateWithoutChildManagersInput;

  @TypeGraphQL.Field(_type => ManagerCreateWithoutChildManagersInput, {
    nullable: false
  })
  create!: ManagerCreateWithoutChildManagersInput;
}
