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
import { IsNumber, IsOptional, ValidateNested } from "class-validator";
import { UserUpdateManyWithoutInsulinsInput } from "./UserUpdateManyWithoutInsulinsInput";
import { Type } from "class-transformer";

@InputType()
class InsulinUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  dose?: number;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutInsulinsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutInsulinsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutInsulinsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutInsulinsInput;
}

export { InsulinUpdateInput as InsulinUpdateInput };