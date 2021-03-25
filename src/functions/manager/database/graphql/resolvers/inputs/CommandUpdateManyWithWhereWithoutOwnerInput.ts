import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommandScalarWhereInput } from "../inputs/CommandScalarWhereInput";
import { CommandUpdateManyMutationInput } from "../inputs/CommandUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommandUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CommandScalarWhereInput, {
    nullable: false
  })
  where!: CommandScalarWhereInput;

  @TypeGraphQL.Field(_type => CommandUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommandUpdateManyMutationInput;
}
