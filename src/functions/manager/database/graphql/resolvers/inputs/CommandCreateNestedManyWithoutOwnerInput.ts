import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommandCreateOrConnectWithoutownerInput } from "../inputs/CommandCreateOrConnectWithoutownerInput";
import { CommandCreateWithoutOwnerInput } from "../inputs/CommandCreateWithoutOwnerInput";
import { CommandWhereUniqueInput } from "../inputs/CommandWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommandCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CommandCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CommandCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: CommandCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandWhereUniqueInput], {
    nullable: true
  })
  connect?: CommandWhereUniqueInput[] | undefined;
}
