/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { User } from "./User";
import { GlucoseFindManyArgs } from "../../glucose/base/GlucoseFindManyArgs";
import { Glucose } from "../../glucose/base/Glucose";
import { InsulinFindManyArgs } from "../../insulin/base/InsulinFindManyArgs";
import { Insulin } from "../../insulin/base/Insulin";
import { MealFindManyArgs } from "../../meal/base/MealFindManyArgs";
import { Meal } from "../../meal/base/Meal";
import { SleepFindManyArgs } from "../../sleep/base/SleepFindManyArgs";
import { Sleep } from "../../sleep/base/Sleep";
import { UserService } from "../user.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async _usersMeta(
    @graphql.Args() args: UserFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Glucose], { name: "glucose" })
  @nestAccessControl.UseRoles({
    resource: "Glucose",
    action: "read",
    possession: "any",
  })
  async resolveFieldGlucose(
    @graphql.Parent() parent: User,
    @graphql.Args() args: GlucoseFindManyArgs
  ): Promise<Glucose[]> {
    const results = await this.service.findGlucose(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Insulin], { name: "insulin" })
  @nestAccessControl.UseRoles({
    resource: "Insulin",
    action: "read",
    possession: "any",
  })
  async resolveFieldInsulin(
    @graphql.Parent() parent: User,
    @graphql.Args() args: InsulinFindManyArgs
  ): Promise<Insulin[]> {
    const results = await this.service.findInsulin(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Meal], { name: "meals" })
  @nestAccessControl.UseRoles({
    resource: "Meal",
    action: "read",
    possession: "any",
  })
  async resolveFieldMeals(
    @graphql.Parent() parent: User,
    @graphql.Args() args: MealFindManyArgs
  ): Promise<Meal[]> {
    const results = await this.service.findMeals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Sleep], { name: "sleep" })
  @nestAccessControl.UseRoles({
    resource: "Sleep",
    action: "read",
    possession: "any",
  })
  async resolveFieldSleep(
    @graphql.Parent() parent: User,
    @graphql.Args() args: SleepFindManyArgs
  ): Promise<Sleep[]> {
    const results = await this.service.findSleep(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
