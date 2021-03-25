import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildCreateOrConnectWithoutadminsInput } from "../inputs/GuildCreateOrConnectWithoutadminsInput";
import { GuildCreateWithoutAdminsInput } from "../inputs/GuildCreateWithoutAdminsInput";
import { GuildUpdateWithoutAdminsInput } from "../inputs/GuildUpdateWithoutAdminsInput";
import { GuildUpsertWithoutAdminsInput } from "../inputs/GuildUpsertWithoutAdminsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildUpdateOneRequiredWithoutAdminsInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutAdminsInput, {
    nullable: true
  })
  create?: GuildCreateWithoutAdminsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutadminsInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutadminsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutAdminsInput, {
    nullable: true
  })
  upsert?: GuildUpsertWithoutAdminsInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutAdminsInput, {
    nullable: true
  })
  update?: GuildUpdateWithoutAdminsInput | undefined;
}
