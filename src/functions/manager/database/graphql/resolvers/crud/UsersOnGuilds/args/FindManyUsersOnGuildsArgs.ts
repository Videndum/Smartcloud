import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UsersOnGuildsOrderByInput } from "../../../inputs/UsersOnGuildsOrderByInput";
import { UsersOnGuildsWhereInput } from "../../../inputs/UsersOnGuildsWhereInput";
import { UsersOnGuildsWhereUniqueInput } from "../../../inputs/UsersOnGuildsWhereUniqueInput";
import { UsersOnGuildsScalarFieldEnum } from "../../../../enums/UsersOnGuildsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUsersOnGuildsArgs {
  @TypeGraphQL.Field(_type => UsersOnGuildsWhereInput, {
    nullable: true
  })
  where?: UsersOnGuildsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsOrderByInput], {
    nullable: true
  })
  orderBy?: UsersOnGuildsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsWhereUniqueInput, {
    nullable: true
  })
  cursor?: UsersOnGuildsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "guildId" | "createdAt"> | undefined;
}
