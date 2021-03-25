import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchAuthOrderByInput } from "../../../inputs/TwitchAuthOrderByInput";
import { TwitchAuthWhereInput } from "../../../inputs/TwitchAuthWhereInput";
import { TwitchAuthWhereUniqueInput } from "../../../inputs/TwitchAuthWhereUniqueInput";
import { TwitchAuthScalarFieldEnum } from "../../../../enums/TwitchAuthScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTwitchAuthArgs {
  @TypeGraphQL.Field(_type => TwitchAuthWhereInput, {
    nullable: true
  })
  where?: TwitchAuthWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitchAuthOrderByInput], {
    nullable: true
  })
  orderBy?: TwitchAuthOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitchAuthWhereUniqueInput, {
    nullable: true
  })
  cursor?: TwitchAuthWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TwitchAuthScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "clientID" | "twitchSecret" | "sessionSecret"> | undefined;
}
