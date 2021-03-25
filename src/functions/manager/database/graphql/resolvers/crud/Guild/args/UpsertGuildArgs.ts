import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GuildCreateInput } from "../../../inputs/GuildCreateInput";
import { GuildUpdateInput } from "../../../inputs/GuildUpdateInput";
import { GuildWhereUniqueInput } from "../../../inputs/GuildWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateInput, {
    nullable: false
  })
  create!: GuildCreateInput;

  @TypeGraphQL.Field(_type => GuildUpdateInput, {
    nullable: false
  })
  update!: GuildUpdateInput;
}
