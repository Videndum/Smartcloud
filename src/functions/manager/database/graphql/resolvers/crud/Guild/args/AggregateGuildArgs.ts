import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GuildOrderByInput } from "../../../inputs/GuildOrderByInput";
import { GuildWhereInput } from "../../../inputs/GuildWhereInput";
import { GuildWhereUniqueInput } from "../../../inputs/GuildWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  where?: GuildWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildOrderByInput], {
    nullable: true
  })
  orderBy?: GuildOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
