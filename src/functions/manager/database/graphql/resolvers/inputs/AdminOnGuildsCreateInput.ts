import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateNestedOneWithoutAdministatesInput } from "../inputs/DiscordUserCreateNestedOneWithoutAdministatesInput";
import { GuildCreateNestedOneWithoutAdminsInput } from "../inputs/GuildCreateNestedOneWithoutAdminsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutAdminsInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutAdminsInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateNestedOneWithoutAdministatesInput, {
    nullable: false
  })
  user!: DiscordUserCreateNestedOneWithoutAdministatesInput;
}
