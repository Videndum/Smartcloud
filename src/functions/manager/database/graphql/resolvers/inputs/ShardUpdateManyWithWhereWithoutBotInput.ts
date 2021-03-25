import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardScalarWhereInput } from "../inputs/ShardScalarWhereInput";
import { ShardUpdateManyMutationInput } from "../inputs/ShardUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardUpdateManyWithWhereWithoutBotInput {
  @TypeGraphQL.Field(_type => ShardScalarWhereInput, {
    nullable: false
  })
  where!: ShardScalarWhereInput;

  @TypeGraphQL.Field(_type => ShardUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShardUpdateManyMutationInput;
}
