import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GuildUpdateInput } from "../../../inputs/GuildUpdateInput";
import { GuildWhereUniqueInput } from "../../../inputs/GuildWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateGuildArgs {
  @TypeGraphQL.Field(_type => GuildUpdateInput, {
    nullable: false
  })
  data!: GuildUpdateInput;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;
}
