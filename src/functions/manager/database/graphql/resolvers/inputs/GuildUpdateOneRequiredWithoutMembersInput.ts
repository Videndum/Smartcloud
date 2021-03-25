import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildCreateOrConnectWithoutmembersInput } from "../inputs/GuildCreateOrConnectWithoutmembersInput";
import { GuildCreateWithoutMembersInput } from "../inputs/GuildCreateWithoutMembersInput";
import { GuildUpdateWithoutMembersInput } from "../inputs/GuildUpdateWithoutMembersInput";
import { GuildUpsertWithoutMembersInput } from "../inputs/GuildUpsertWithoutMembersInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildUpdateOneRequiredWithoutMembersInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutMembersInput, {
    nullable: true
  })
  create?: GuildCreateWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutmembersInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutmembersInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutMembersInput, {
    nullable: true
  })
  upsert?: GuildUpsertWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutMembersInput, {
    nullable: true
  })
  update?: GuildUpdateWithoutMembersInput | undefined;
}
