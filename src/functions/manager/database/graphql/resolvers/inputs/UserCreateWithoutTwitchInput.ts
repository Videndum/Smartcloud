import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionCreateNestedManyWithoutOwnerInput } from "../inputs/ActionCreateNestedManyWithoutOwnerInput";
import { BotCreateNestedManyWithoutOwnerInput } from "../inputs/BotCreateNestedManyWithoutOwnerInput";
import { CommandCreateNestedManyWithoutOwnerInput } from "../inputs/CommandCreateNestedManyWithoutOwnerInput";
import { DiscordUserCreateNestedOneWithoutUserInput } from "../inputs/DiscordUserCreateNestedOneWithoutUserInput";
import { HostCreateNestedManyWithoutOwnerInput } from "../inputs/HostCreateNestedManyWithoutOwnerInput";
import { ManagerCreateNestedManyWithoutOwnerInput } from "../inputs/ManagerCreateNestedManyWithoutOwnerInput";
import { PATCreateNestedManyWithoutUserInput } from "../inputs/PATCreateNestedManyWithoutUserInput";
import { TwitterUserCreateNestedManyWithoutUserInput } from "../inputs/TwitterUserCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutTwitchInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAdmin?: boolean | undefined;

  @TypeGraphQL.Field(_type => ActionCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  actions?: ActionCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => BotCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  Bot?: BotCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => CommandCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  commands?: CommandCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  discord?: DiscordUserCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => HostCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  Hosts?: HostCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => ManagerCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  Manager?: ManagerCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => PATCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  pat?: PATCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  TwitterUser?: TwitterUserCreateNestedManyWithoutUserInput | undefined;
}
