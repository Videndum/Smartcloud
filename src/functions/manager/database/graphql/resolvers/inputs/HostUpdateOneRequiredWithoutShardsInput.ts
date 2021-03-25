import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateOrConnectWithoutshardsInput } from "../inputs/HostCreateOrConnectWithoutshardsInput";
import { HostCreateWithoutShardsInput } from "../inputs/HostCreateWithoutShardsInput";
import { HostUpdateWithoutShardsInput } from "../inputs/HostUpdateWithoutShardsInput";
import { HostUpsertWithoutShardsInput } from "../inputs/HostUpsertWithoutShardsInput";
import { HostWhereUniqueInput } from "../inputs/HostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpdateOneRequiredWithoutShardsInput {
  @TypeGraphQL.Field(_type => HostCreateWithoutShardsInput, {
    nullable: true
  })
  create?: HostCreateWithoutShardsInput | undefined;

  @TypeGraphQL.Field(_type => HostCreateOrConnectWithoutshardsInput, {
    nullable: true
  })
  connectOrCreate?: HostCreateOrConnectWithoutshardsInput | undefined;

  @TypeGraphQL.Field(_type => HostUpsertWithoutShardsInput, {
    nullable: true
  })
  upsert?: HostUpsertWithoutShardsInput | undefined;

  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: true
  })
  connect?: HostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => HostUpdateWithoutShardsInput, {
    nullable: true
  })
  update?: HostUpdateWithoutShardsInput | undefined;
}
