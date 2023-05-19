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
import { IsDate, IsInt, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutSleepsInput } from "./UserCreateNestedManyWithoutSleepsInput";

@InputType()
class SleepCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  end!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quality?: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  start!: Date;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutSleepsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutSleepsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutSleepsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutSleepsInput;
}

export { SleepCreateInput as SleepCreateInput };