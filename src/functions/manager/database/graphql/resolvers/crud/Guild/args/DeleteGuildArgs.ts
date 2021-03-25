import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GuildWhereUniqueInput } from "../../../inputs/GuildWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;
}
