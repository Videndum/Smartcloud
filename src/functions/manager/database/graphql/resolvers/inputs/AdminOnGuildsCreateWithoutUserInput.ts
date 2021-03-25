import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildCreateNestedOneWithoutAdminsInput } from "../inputs/GuildCreateNestedOneWithoutAdminsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutAdminsInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutAdminsInput;
}
