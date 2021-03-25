import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotScalarWhereInput } from "../inputs/BotScalarWhereInput";
import { BotUpdateManyMutationInput } from "../inputs/BotUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpdateManyWithWhereWithoutPriorityHostInput {
  @TypeGraphQL.Field(_type => BotScalarWhereInput, {
    nullable: false
  })
  where!: BotScalarWhereInput;

  @TypeGraphQL.Field(_type => BotUpdateManyMutationInput, {
    nullable: false
  })
  data!: BotUpdateManyMutationInput;
}
