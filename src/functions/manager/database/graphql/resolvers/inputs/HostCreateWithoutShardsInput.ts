import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateNestedManyWithoutHostsInput } from "../inputs/BotCreateNestedManyWithoutHostsInput";
import { BotCreateNestedManyWithoutPriorityHostInput } from "../inputs/BotCreateNestedManyWithoutPriorityHostInput";
import { UserCreateNestedOneWithoutHostsInput } from "../inputs/UserCreateNestedOneWithoutHostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostCreateWithoutShardsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ip!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  port?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  shardLimit?: number | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutHostsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutHostsInput;

  @TypeGraphQL.Field(_type => BotCreateNestedManyWithoutHostsInput, {
    nullable: true
  })
  bots?: BotCreateNestedManyWithoutHostsInput | undefined;

  @TypeGraphQL.Field(_type => BotCreateNestedManyWithoutPriorityHostInput, {
    nullable: true
  })
  priorityBot?: BotCreateNestedManyWithoutPriorityHostInput | undefined;
}
