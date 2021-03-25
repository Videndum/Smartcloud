import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildCreateOrConnectWithoutadminsInput } from "../inputs/GuildCreateOrConnectWithoutadminsInput";
import { GuildCreateWithoutAdminsInput } from "../inputs/GuildCreateWithoutAdminsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildCreateNestedOneWithoutAdminsInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutAdminsInput, {
    nullable: true
  })
  create?: GuildCreateWithoutAdminsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutadminsInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutadminsInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;
}
