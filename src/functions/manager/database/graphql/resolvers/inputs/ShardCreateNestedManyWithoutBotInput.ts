import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardCreateOrConnectWithoutbotInput } from "../inputs/ShardCreateOrConnectWithoutbotInput";
import { ShardCreateWithoutBotInput } from "../inputs/ShardCreateWithoutBotInput";
import { ShardWhereUniqueInput } from "../inputs/ShardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardCreateNestedManyWithoutBotInput {
  @TypeGraphQL.Field(_type => [ShardCreateWithoutBotInput], {
    nullable: true
  })
  create?: ShardCreateWithoutBotInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardCreateOrConnectWithoutbotInput], {
    nullable: true
  })
  connectOrCreate?: ShardCreateOrConnectWithoutbotInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardWhereUniqueInput], {
    nullable: true
  })
  connect?: ShardWhereUniqueInput[] | undefined;
}
