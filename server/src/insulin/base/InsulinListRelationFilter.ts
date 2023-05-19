/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InsulinWhereInput } from "./InsulinWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InsulinListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InsulinWhereInput,
  })
  @ValidateNested()
  @Type(() => InsulinWhereInput)
  @IsOptional()
  @Field(() => InsulinWhereInput, {
    nullable: true,
  })
  every?: InsulinWhereInput;

  @ApiProperty({
    required: false,
    type: () => InsulinWhereInput,
  })
  @ValidateNested()
  @Type(() => InsulinWhereInput)
  @IsOptional()
  @Field(() => InsulinWhereInput, {
    nullable: true,
  })
  some?: InsulinWhereInput;

  @ApiProperty({
    required: false,
    type: () => InsulinWhereInput,
  })
  @ValidateNested()
  @Type(() => InsulinWhereInput)
  @IsOptional()
  @Field(() => InsulinWhereInput, {
    nullable: true,
  })
  none?: InsulinWhereInput;
}
export { InsulinListRelationFilter as InsulinListRelationFilter };