import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class JsonNullableListFilter {
  @TypeGraphQL.Field(_type => [GraphQLJSON], {
    nullable: true
  })
  equals?: Prisma.InputJsonValue[] | undefined;

  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: true
  })
  has?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => [GraphQLJSON], {
    nullable: true
  })
  hasEvery?: Prisma.InputJsonValue[] | undefined;

  @TypeGraphQL.Field(_type => [GraphQLJSON], {
    nullable: true
  })
  hasSome?: Prisma.InputJsonValue[] | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
