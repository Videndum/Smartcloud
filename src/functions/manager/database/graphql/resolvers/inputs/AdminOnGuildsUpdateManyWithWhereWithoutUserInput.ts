import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsScalarWhereInput } from "../inputs/AdminOnGuildsScalarWhereInput";
import { AdminOnGuildsUpdateManyMutationInput } from "../inputs/AdminOnGuildsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => AdminOnGuildsScalarWhereInput, {
    nullable: false
  })
  where!: AdminOnGuildsScalarWhereInput;

  @TypeGraphQL.Field(_type => AdminOnGuildsUpdateManyMutationInput, {
    nullable: false
  })
  data!: AdminOnGuildsUpdateManyMutationInput;
}
