import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateOrConnectWithoutadministatesInput } from "../inputs/DiscordUserCreateOrConnectWithoutadministatesInput";
import { DiscordUserCreateWithoutAdministatesInput } from "../inputs/DiscordUserCreateWithoutAdministatesInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserCreateNestedOneWithoutAdministatesInput {
  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutAdministatesInput, {
    nullable: true
  })
  create?: DiscordUserCreateWithoutAdministatesInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateOrConnectWithoutadministatesInput, {
    nullable: true
  })
  connectOrCreate?: DiscordUserCreateOrConnectWithoutadministatesInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: true
  })
  connect?: DiscordUserWhereUniqueInput | undefined;
}
