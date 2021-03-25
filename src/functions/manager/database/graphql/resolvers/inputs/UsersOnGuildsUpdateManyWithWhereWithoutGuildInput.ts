import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsScalarWhereInput } from "../inputs/UsersOnGuildsScalarWhereInput";
import { UsersOnGuildsUpdateManyMutationInput } from "../inputs/UsersOnGuildsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsUpdateManyWithWhereWithoutGuildInput {
  @TypeGraphQL.Field(_type => UsersOnGuildsScalarWhereInput, {
    nullable: false
  })
  where!: UsersOnGuildsScalarWhereInput;

  @TypeGraphQL.Field(_type => UsersOnGuildsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsersOnGuildsUpdateManyMutationInput;
}
