import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardCreateWithoutBotInput } from "../inputs/ShardCreateWithoutBotInput";
import { ShardWhereUniqueInput } from "../inputs/ShardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardCreateOrConnectWithoutbotInput {
  @TypeGraphQL.Field(_type => ShardWhereUniqueInput, {
    nullable: false
  })
  where!: ShardWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShardCreateWithoutBotInput, {
    nullable: false
  })
  create!: ShardCreateWithoutBotInput;
}
