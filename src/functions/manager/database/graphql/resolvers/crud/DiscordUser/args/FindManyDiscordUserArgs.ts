import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DiscordUserOrderByInput } from "../../../inputs/DiscordUserOrderByInput";
import { DiscordUserWhereInput } from "../../../inputs/DiscordUserWhereInput";
import { DiscordUserWhereUniqueInput } from "../../../inputs/DiscordUserWhereUniqueInput";
import { DiscordUserScalarFieldEnum } from "../../../../enums/DiscordUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  where?: DiscordUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserOrderByInput], {
    nullable: true
  })
  orderBy?: DiscordUserOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: DiscordUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "username" | "discrim" | "userId"> | undefined;
}
