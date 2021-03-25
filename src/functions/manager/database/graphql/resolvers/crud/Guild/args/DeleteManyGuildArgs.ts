import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GuildWhereInput } from "../../../inputs/GuildWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  where?: GuildWhereInput | undefined;
}
