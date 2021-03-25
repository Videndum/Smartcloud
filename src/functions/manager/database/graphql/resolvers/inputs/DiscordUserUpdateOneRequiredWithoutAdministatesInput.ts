import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateOrConnectWithoutadministatesInput } from "../inputs/DiscordUserCreateOrConnectWithoutadministatesInput";
import { DiscordUserCreateWithoutAdministatesInput } from "../inputs/DiscordUserCreateWithoutAdministatesInput";
import { DiscordUserUpdateWithoutAdministatesInput } from "../inputs/DiscordUserUpdateWithoutAdministatesInput";
import { DiscordUserUpsertWithoutAdministatesInput } from "../inputs/DiscordUserUpsertWithoutAdministatesInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserUpdateOneRequiredWithoutAdministatesInput {
  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutAdministatesInput, {
    nullable: true
  })
  create?: DiscordUserCreateWithoutAdministatesInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateOrConnectWithoutadministatesInput, {
    nullable: true
  })
  connectOrCreate?: DiscordUserCreateOrConnectWithoutadministatesInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpsertWithoutAdministatesInput, {
    nullable: true
  })
  upsert?: DiscordUserUpsertWithoutAdministatesInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: true
  })
  connect?: DiscordUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateWithoutAdministatesInput, {
    nullable: true
  })
  update?: DiscordUserUpdateWithoutAdministatesInput | undefined;
}
