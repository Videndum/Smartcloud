import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateOrConnectWithoutbotsInput } from "../inputs/HostCreateOrConnectWithoutbotsInput";
import { HostCreateWithoutBotsInput } from "../inputs/HostCreateWithoutBotsInput";
import { HostUpdateWithoutBotsInput } from "../inputs/HostUpdateWithoutBotsInput";
import { HostUpsertWithoutBotsInput } from "../inputs/HostUpsertWithoutBotsInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpdateOneRequiredWithoutBotsInput {
  @TypeGraphQL.Field(_type => HostCreateWithoutBotsInput, {
    nullable: true
  })
  create?: HostCreateWithoutBotsInput | undefined;

  @TypeGraphQL.Field(_type => HostCreateOrConnectWithoutbotsInput, {
    nullable: true
  })
  connectOrCreate?: HostCreateOrConnectWithoutbotsInput | undefined;

  @TypeGraphQL.Field(_type => HostUpsertWithoutBotsInput, {
    nullable: true
  })
  upsert?: HostUpsertWithoutBotsInput | undefined;

  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: true
  })
  connect?: HostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => HostUpdateWithoutBotsInput, {
    nullable: true
  })
  update?: HostUpdateWithoutBotsInput | undefined;
}
