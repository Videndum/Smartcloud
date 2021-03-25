import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardUpdateWithoutBotInput } from "../inputs/ShardUpdateWithoutBotInput";
import { ShardWhereUniqueInput } from "../inputs/ShardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardUpdateWithWhereUniqueWithoutBotInput {
  @TypeGraphQL.Field(_type => ShardWhereUniqueInput, {
    nullable: false
  })
  where!: ShardWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShardUpdateWithoutBotInput, {
    nullable: false
  })
  data!: ShardUpdateWithoutBotInput;
}
