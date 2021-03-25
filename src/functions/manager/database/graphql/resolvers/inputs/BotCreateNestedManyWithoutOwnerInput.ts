import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithoutownerInput } from "../inputs/BotCreateOrConnectWithoutownerInput";
import { BotCreateWithoutOwnerInput } from "../inputs/BotCreateWithoutOwnerInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [BotCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: BotCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereUniqueInput], {
    nullable: true
  })
  connect?: BotWhereUniqueInput[] | undefined;
}
