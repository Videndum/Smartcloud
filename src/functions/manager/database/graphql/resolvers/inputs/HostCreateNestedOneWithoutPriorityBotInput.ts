import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateOrConnectWithoutpriorityBotInput } from "../inputs/HostCreateOrConnectWithoutpriorityBotInput";
import { HostCreateWithoutPriorityBotInput } from "../inputs/HostCreateWithoutPriorityBotInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostCreateNestedOneWithoutPriorityBotInput {
  @TypeGraphQL.Field(_type => HostCreateWithoutPriorityBotInput, {
    nullable: true
  })
  create?: HostCreateWithoutPriorityBotInput | undefined;

  @TypeGraphQL.Field(_type => HostCreateOrConnectWithoutpriorityBotInput, {
    nullable: true
  })
  connectOrCreate?: HostCreateOrConnectWithoutpriorityBotInput | undefined;

  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: true
  })
  connect?: HostWhereUniqueInput | undefined;
}
