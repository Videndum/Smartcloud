import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateWithoutOwnerInput } from "../inputs/BotCreateWithoutOwnerInput";
import { BotUpdateWithoutOwnerInput } from "../inputs/BotUpdateWithoutOwnerInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: false
  })
  where!: BotWhereUniqueInput;

  @TypeGraphQL.Field(_type => BotUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: BotUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => BotCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: BotCreateWithoutOwnerInput;
}
