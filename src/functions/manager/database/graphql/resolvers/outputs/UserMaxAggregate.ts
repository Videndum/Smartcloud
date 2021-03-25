import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAdmin!: boolean | null;
}
